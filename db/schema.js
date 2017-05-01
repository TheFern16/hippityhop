var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

mongoose.connect('mongodb://localhost/lyrics');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'woopsie daisy'));
db.once('open', function() {
  console.log('the connection has been established');
});

autoIncrement.initialize(db);

var lyricSchema = new mongoose.Schema({
  lyric: {type: String, required: true, index: {unique: true}}
});

lyricSchema.plugin(autoIncrement.plugin, 'Lyric');
var Lyric = mongoose.model('Lyric', lyricSchema);
module.exports = Lyric;