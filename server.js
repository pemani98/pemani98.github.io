var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var path = require("path");

app.set('port', (process.env.PORT || 7000));
app.use(express.static(__dirname + '/views'));
app.engine('pug', require('pug').__express)
app.engine('html', require('pug').renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, './views')));



app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());



app.get('*', function(req, res){
    res.render('index', {
      title: 'Homepage'
    });
});

app.listen(app.get('port'), function() {
});
