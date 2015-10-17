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

var db = require('./db');

db.config.connect();


var app = express();

var smtpTransport = nodemailer.createTransport("SMTP",{
service: "Gmail",
auth: {
user: "nfeedback07@gmail.com",
pass: "feedapp12"
}
});

require('./config/passport')(passport); // pass passport for configuration

// instruct the app to use the `morgan()` middleware for log every request to the console
app.use(morgan('dev'));

app.use(cookieParser()); // read cookies (needed for auth)

// instruct the app to use the `bodyParser()` middleware for all routes
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());



app.set('port', process.env.PORT || 3000);

// set the view engine to ejs
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'ejs');

// app.use(session({
//   cookieName: 'session',
//   secret: 'appsecret',
//   duration: 30 * 60 * 1000,
//   activeDuration: 5 * 60 * 1000,
// }));


//required for passport
// app.use(session({
//     secret: 'appsecret',
//     resave: true,
//     saveUninitialized: true,
//     cookie: {
//         secure: true,
//         maxAge: 2 * 60 * 1000
//     }
// })); 
// required for passport
app.use(session({
    secret: 'appsecret',
    resave: true,
    saveUninitialized: true,
    cookie: {
        
        maxAge  : 5 * 60 * 1000,
        activeDuration: 5 * 60 * 1000,
    }


})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session



//Initialize Routes
require('./config/routes').init(app, passport,smtpTransport);
//require('./config/routes').init(app, passport);



http.createServer(app).listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'));
});
