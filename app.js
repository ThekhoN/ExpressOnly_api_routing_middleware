var express = require('express');
var app = express();

var logger = require('./logger.js');
app.use(express.static('public'));
app.use(logger);

app.get('/numbers', function (req, res) {
  var data = [1,2,3,4,5,6];
  res.send(data);
});

app.get('/letters', function (req, res) {
  var data = ['a', 'b', 'c', 'd', 'e', 'f'];
  res.send(data);
});



app.listen(3000, function () {
  console.log('listening at port 3000');
});
