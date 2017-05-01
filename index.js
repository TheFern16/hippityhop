var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.listen(1337, () => {
  console.log('I am listening to port 1337');
});

app.get('/lyrics', (req, res) => {
  console.log(req.body);
})