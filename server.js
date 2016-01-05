var express = require('express'),
    http = require('http'),
    path = require('path'),
    morgan = require('morgan'),
    passport = require('passport'),
    flash = require('connect-flash'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session');
    nodemailer = require('nodemailer');
    open = require("open");
    url = require('url'),
    schedule = require('node-schedule');
var server;
var db = require('./db');

db.config.connect(function(err){
    if(err){
        console.log(err);
    } else {
        console.log("connected");
    }
});


var app = express();

var query = db.config.query("select * from sessions", function(req, res) {
    //console.log(res);
    res.forEach(function(item){
        //console.log(item);
        if(new Date(item.date) < new Date()){
            //console.log("session should close");
            var query = db.config.query('update sessions set status = ? where id = ?', ["close",item.id], function(req, res) {
                
            });
        }
    })
    
});


// var j = schedule.scheduleJob({hour: 12, minute: 21}, function(){
//   //console.log('The world is going to end today.');

//         var query = db.config.query('update sessions set status = ? where date = ?', ["close",current_date], function(req, res) {
//          //console.log(query.sql);
  
//         });

// });

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
    user: "xxxxxxx",
    pass: "xxxxxxxxxx"
}
});

var auth = require('./config/middleware/authorization');
require('./config/passport')(passport); // pass passport for configuration

// instruct the app to use the `morgan()` middleware for log every request to the console
//app.use(morgan('dev'));

app.use(cookieParser()); // read cookies (needed for auth)

// instruct the app to use the `bodyParser()` middleware for all routes
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);

// set the view engine to ejs
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'public/views'));
// app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'ejs');

app.use(session({
    secret: 'appsecret',
    resave: true,
    saveUninitialized: true,
    cookie: {        
        maxAge  : 60 * 60 * 1000,
        activeDuration: 60 * 60 * 1000,
    }
})); // session secret

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

//Initialize Routes
require('./config/routes').init(app,passport,auth,smtpTransport);

server = http.createServer(app).listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'));
});

