var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist/'));
app.get('/api', (req, res) =>
    res.send("welcome to server")
);
app.get('*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/'}),
);
app.listen(process.env.PORT || 4200);