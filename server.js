var express = require('express');

//Create our App
var app = express();
const PORT = process.env.PORT || 8080;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});


//use() lets to add functionality to our express app
//static requires a folder location, in our case its public
app.use(express.static('public'));

//start the server
app.listen(PORT, function() {
    console.log('Express server is up on port ' + PORT);
});