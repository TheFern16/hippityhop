var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

mongoose.connect('mongodb://localhost/lyrics');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'woopsie daisy'));
db.once('open', function() {
  console.log('the connection has been established');
});

autoIncrement.initialize(db);

var lyricsSchema = new mongoose.Schema({
  lyric: {type: String, required: true, index: {unique: true}}
});

var rhymeSchema = new mongoose.Schema({
  rhyme: {type: String, required: true, index: {unique: true}}
});

lyricsSchema.plugin(autoIncrement.plugin, 'Lyrics');
rhymeSchema.plugin(autoIncrement.plugin, 'Rhymes');

var Rhymes = mongoose.model('Rhymes', rhymeSchema);
var Lyrics = mongoose.model('Lyrics', lyricsSchema);
module.exports = {
  Lyrics,
  Rhymes
};