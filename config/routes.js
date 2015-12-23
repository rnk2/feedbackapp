var index = require('../app/controller/index');
var user = require('../app/controller/user');
var admin = require('../app/controller/admin');
var requests = require('../app/controller/requests');
var db = require('../db');


exports.init = function(app, passport, auth, smtpTransport) {
    console.log('Initializing Routes');

    app.all('/auth/*', auth.requiresLogin);

    // Routes
    app.get('/api', function(request, response) {
        response.send('Library API is running');
    });

    app.get('/errorRoute', index.errorRoute);

    // app.all('/auth/*', auth.requiresLogin, auth.user.hasAuthorization);
    //default route home router
    app.get('/', index.render);
    // registration page
    app.get('/signup', index.register);
    // app.get('/profile', auth.user.hasAuthorizationToPage, index.profile);

    //signin page
    app.get('/signin', user.signin);
    //logout page
    app.get('/logout', function(req, res) {
        //console.log(req);
        req.logOut();
        res.redirect('/');
    });
    //login success response
    app.get('/auth/success', function(req, res) {
        index.home(req, res);
    });

    app.get("/dashboard", auth.requiresLogin, function(req, res) {
        user.dashboard(req, res);
    });

    app.get('/requests', requests.render);

    //admin module
    app.get('/adminhome', auth.requiresLogin, auth.user.hasAuthorization, admin.render);

    //user module
    app.get('/userhome', auth.requiresLogin, auth.user.hasAuthorization, user.userhome);


    // new user registration
    app.post('/signup', function(req, res, next) {
        // generate the authenticate method and pass the req/res
        passport.authenticate('local-signup', function(err, user) {

            if (err) {
                return next(err);
            }
            if (user.id) {
                return res.send(JSON.stringify(user));
            } else {
                return res.send(JSON.stringify({
                    errorMessage: "User name already exists"
                }));
            }

        })(req, res, next);

    });

    //user sigin and authentication
    app.post('/signin',
        passport.authenticate('local-signin', {
            successRedirect: '/auth/success',
            failureRedirect: '/errorRoute',
            failureFlash: true
        }));


    //adding new sessions from 
    app.post('/newsessions', function(request, response) {

        var tname = request.body.topicname;
        var pname = request.body.presentername;
        var location = request.body.location;
        var pst_date = request.body.pst_date;

        var query = db.config.query('insert into sessions(name,pid,location,date) values(' + "'" + pname + "'" + "," + "'" + tname + "'" + "," + "'" + location + "'" + "," + "'" + pst_date + "'" + ');', function(req, res) {


            response.send(res);

        });

        console.log(query.sql);
    });
    //getting existing sessions
    app.get('/newsessions', function(request, response) {

        db.config.query("select * from sessions", function(req, res) {
            response.send(res);
        });
    });

    //new updates of scheduled sessions before date
    app.put('/index/:id', function(request, response) {
        console.log("inside put");
        //console.log(request.params.id);
        //console.log(request.body.tname);
        var ssid = request.params.id;
        var tname = request.body.tname;
        var pname = request.body.pname;
        var pst_date = request.body.pst_date;


        var query = db.config.query('update sessions set tname = ?,pst_date = ? where ssid = ?', [tname, pst_date, ssid], function(req, res) {
            //console.log(res);
            response.send(res);
        });

        //console.log(query.sql);
    });
    //deleting the existing sessions
    app.delete('/index/:id', function(request, response) {
        console.log("inside delete");
        var ssid = request.params.id;
        var query = db.config.query('delete from sessions where ssid = ?', [ssid], function(req, res) {
            console.log(res);
            response.send(res);
        })

    });









};
