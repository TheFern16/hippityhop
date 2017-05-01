var express = require('express');
var bodyParser = require('body-parser');
var Lyrics = require('./db/schema.js');

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.listen(1337, () => {
  console.log('I am listening to port 1337');
});

app.get('/lyrics', function(req, res) {
  Lyrics.find({})
    .exec((err, lyrics) => {
      res.status(200).send(lyrics)
    });
})