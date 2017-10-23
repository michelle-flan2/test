var express = require('express');
var app = express();
var path = require('path');

app.get('/Hello', function (req, res) {
 res.send('Hello');
})
app.get('/hello/:name', function (req, res) {
	console.log(req.params.name);
 res.send('hello' + req.params.name);
})

app.get('/test', function (req, res) {
	console.log("file.io");
 res.sendFile(path.join(__dirname + '/index.html'));
})

 
 app.get('/name', function (req, res) {
console.log("get method");
console.log(req.query.lastname);
res.send('Hello ' + " " + req.query.firstname + " " + req.query.lastname);
 })
 
var server = app.listen(8081, function () {
 var host = server.address().address
 var port = server.address().port
 console.log("Example app listening at http://%s:%s", host, port)
})


//post
var bodyParser = require("body-parser");
app.get('/', function (req, res) {
res.send('Hello World');
})
app.get('/hello/:name', function (req, res) {
console.log(req.params.name);
res.send('Hello ' + req.params.name);
})
app.get('/test', function(req, res) {
console.log("file io");
res.sendFile(path.join(__dirname + '/index.html'));
});
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/name', function (req, res) {
console.log("post method");
console.log(req.body.firstname);
res.send('Hello ' + req.body.firstname + " " + req.body.lastname);
})


//ajax
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}

