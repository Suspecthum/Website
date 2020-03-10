var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine','ejs');
app.use('/assets',express.static('assets'));
app.use('/image', express.static('image'));


app.get('/',function(req, res){
    res.render('index');
});

app.get('/contact',function(req,res){
    res.render('contact');
});

app.get('/about',function(req,res){
    res.render('about');
});

app.get('/download',function(req,res){
    res.render('download');
});

app.get('/doc',function(req, res){
    res.render('doc');
})

app.listen(8080);
