var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));



articleOne = {
    title: 'Article One |Rohit N V',
    heading: 'Article One ',
    date:'Sep 5, 2016' ,
    content :`  <p>
                            This is the content of my first article. I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.
                            </p>
                        <p>
                            This is the content of my first article. I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.
                            </p>  `
    

    
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/cc', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'cc.html'));
});

app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two', function (req, res) {
  res.send('Article two is served here');
});

app.get('/article-threee', function (req, res) {
  res.send('Article three is served here');
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
