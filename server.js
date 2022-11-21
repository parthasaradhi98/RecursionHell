var express = require('express');
var app = express();
const session = require("express-session");
app.use(express.static(__dirname + '/dist/'));
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const cors = require("cors");
const path = require("path");
app.set("view engine", "ejs");
const schema = require("./database/tables");

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: "SECRET",
    })
);
if (process.env.NODE_ENV !== "production") {
    var corsOptions = {
        origin: "http://localhost:4200",
    };
}
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// DATABASE
const Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
}
);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        schema.createUserTable(sequelize);
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


// AUTH
const passport = require("passport");
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});
require("./config/passport.config")(passport);

// Redirect the user to the Google signin page 
// app.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["email", "profile"] }), (req,res)=>{
//     console.log("gets into ersponse");
//     res.send("abc");
//   }
// );
app.get("/auth/google",(req,res)=>{
    console.log("gets to auth google");
    res.redirect('/dashboard');
})

// Using jwt web token for checking if it is authenticated
const jwt = require("jsonwebtoken");
app.get(
  "/auth/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res,) => {
    jwt.sign(
      { user: req.user },
      "secretKey",
      { expiresIn: "1h" },
      (err, token) => {
        if (err) {
          res.redirect("/login");
        }
        // res.json({
        //   token,
        // });
        res.header('authorization', token);
        res.redirect('/dashboard');
        // console.log(res);
        // res.redirect("/dashboard");
      }
    );
  }
);

app.get(
    "/api/dashboard",
    passport.authenticate("jwt", { session: false }),
    (req, res, next) => {
      res.send("Authorized");
    }
  );


app.get('/api', (req, res) =>
    res.send("welcome to server")
);

app.get('/o/oauth*',(req, res) =>
    res.send("welcome to server")
);

app.get('*', (req, res) => {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log(fullUrl);
    res.sendFile('index.html', { root: 'dist/' });
}
);
const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});