var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.listen(1337, () => {
  console.log('I am listening to port 1337');
});