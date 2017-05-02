var express = require('express');
var bodyParser = require('body-parser');
var Lyrics = require('./db/schema.js').Lyrics;
var Rhymes = require('./db/schema.js').Rhymes;

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.listen(1337, () => {
  console.log('I am listening to port 1337');
});

// All routes supported for the lyrics endpoint

app.get('/lyrics', function(req, res) {
  Lyrics.find({}).exec((err, lyrics) => {
      res.status(200).send(lyrics)
    });
});

app.post('/lyrics', function(req, res) {
  Lyrics.findOne({ lyric: req.body.lyric }).exec((err, lyric) => {
    if (!lyric) {
      var newLyric = new Lyrics({
        lyric: req.body.lyric
      });
      newLyric.save((err, newLyric) => {
        if (err) {
          res.status(500).send(err);
        }
        res.status(201).send(newLyric);
      });
    }
  });
});

app.put('/lyrics', function(req, res) {
  Lyrics.findOne({ _id: req.body._id }).exec((err, lyric) => {
    lyric.lyric = req.body.lyric
    res.status(202).send(lyric);
  });
});

app.delete('/lyrics', function(req, res) {
  console.log(req.body)
  Lyrics.findOne({ lyric: req.body.lyric }).remove().exec((err, response) => {
    if (err) {
      throw err;
    }
    res.status(204).send(req.body.lyric);
  });
});

// the routes supported for the rhymes endpoint

app.get('/rhymes', function(req, res) {
  Rhymes.find({}).exec((err, rhymes) => {
    res.status(200).send(rhymes);
  });
});

app.post('/rhymes', function(req, res) {
  Rhymes.findOne({ rhyme: req.body._id }).exec((err, lyric) => {
    if (!lyric) {
      var newRhyme = new Rhymes({
        rhyme: req.body.rhyme
      });
      newRhyme.save((err, newRhyme) => {
        if (err) {
          res.status(500).send(err);
        }
        res.status(201).send(newRhyme);
      });
    }
  });
});