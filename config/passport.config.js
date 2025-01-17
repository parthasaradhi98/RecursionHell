const GoogleStrategy = require("passport-google-oauth2").Strategy;
// const User = require("./userModel");
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");

module.exports = (passport) => {
    passport.use(new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: process.env.CALLBACK_URL,
        passReqToCallback: true
    },
        async (request, accessToken, refreshToken, profile, done) => {
            try {
                // let existingUser = await User.findOne({ 'google.id': profile.id });
                // // if user exists return the user 
                // if (existingUser) {
                //   return done(null, existingUser);
                // }
                // if user does not exist create a new user 
                console.log('Creating new user...');
                // const newUser = new User({
                //     method: 'google',
                //     google: {
                //         id: profile.id,
                //         name: profile.displayName,
                //         email: profile.emails[0].value
                //     }
                // });
                // console.log(profile);
                // console.log(newUser);
                // await newUser.save();
                return done(null, profile);
            } catch (error) {
                return done(error, false)
            }
        }
    ));
    passport.use(
        new JwtStrategy(
            {
                jwtFromRequest: ExtractJwt.fromHeader("authorization"),
                secretOrKey: "secretKey",
            },
            async (jwtPayload, done) => {
                try {
                    // Extract user
                    const user = jwtPayload.user;
                    // console.log("passport config",user);
                    done(null, user);
                } catch (error) {
                    done(error, false);
                }
            }
        )
    );
}