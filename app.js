/**
 * Created by Marvin on 10.12.2017.
 */
var express = require('express'),
    path = require('path'),
    cons = require('consolidate');


//create our express app
var app = express();


app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

//add some standard express middleware
app.configure(function() {
    app.use(express.logger('dev')); /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(express.static(path.join(__dirname, 'views')));
});

//routes
app.get('/', function(req, res) {
    res.render('facebook');
});

//have our app listen on port 3000
app.listen(3000);
console.log('Your app is now running at: http://127.0.0.1:3000/');