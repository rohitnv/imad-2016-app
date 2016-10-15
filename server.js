var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles ={
    'article-one':{
           title: 'Article One |Rohit N V',
    heading: 'Article One ',
    date:'Sep 5, 2016' ,
    content :`  <p>
                            This is the content of my first article. I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.
                            </p>
                        <p>
                            This is the content of my first article. I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.
                            </p>  `
    

    },
    'article2':{
                   title: 'Article Two |Rohit N V',
    heading: 'Article Two ',
    date:'Sep 5, 2016' ,
    content :`  <p>
                            This is the content of my first article. I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.
                            </p>
                        <p>
                            This is the content of my first article. I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.
                            </p>  `
    

    },
    'article3':{
                   title: 'Article Three |Rohit N V',
    heading: 'Article Three ',
    date:'Sep 5, 2016' ,
    content :`  <p>
                            This is the content of my first article. I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.
                            </p>
                        <p>
                            This is the content of my first article. I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.I am feeling happy and Good.
                            </p>  `
            
        
    }
};

function createTemplate(data){
var title =data.title;
var heading = data.heading;
var content = data.content;
var htmlTemplate =
        `<html>
            <head>
                <title>
                       ${title}
                </title>
                <meta name = "viewport" content = "width-device-width,initial-scale-1"/>
    
                     <link href="/ui/style.css" rel="stylesheet" />
    
            </head>
            <body>
                <div class="container">
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <hr/>
                    <h3>
                        
                      ${heading}
                    </h3>
                        <div>
                            Oct 15 2016
                         </div>
                            
                        <div>
                            ${content}
                            </div>  
                            
                       </div>     
                    </body>
    </html>                   `;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleOne));
});

app.get('/article2', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article2.html'));
});

app.get('/article3', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article3.html'));
});


app.get('/article4', function (req, res) {
  res.send('Article four is served here');
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
