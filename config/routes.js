var index = require('../app/controller/index');
var user = require('../app/controller/user');
var admin = require('../app/controller/admin');
var session = require('../app/controller/session');
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

    app.get("/getLocations", function(req, resp) {
        session.getLocations(req, resp);
    });

    app.get('/partcpates/:id', function(request, response) {
        db.config.query("select * from participants where ssid= ?", [request.params.id], function(req, res) {
            response.send(res);
        });
    });

    app.post('/partcpates', function(request, response) {

        var username = request.body.participant;
        var email = request.body.email;
        var ssid = request.body.ssid;

        var query = db.config.query('select * from participants where email=? and ssid= ?', [email, ssid], function(req, res) {

            if (res.length <= 0) {
                db.config.query('insert into participants(participant,email,ssid) values(' + "'" + username + "'" + "," + "'" + email + "'" + "," + "'" + ssid + "'" + ');', function(req, res) {
                    response.send(res);
                });
            } else {                
            }
        });
    });


    app.delete('/partcpates/:id', function(request, response) {
        var id = request.params.id;
        var query = db.config.query('delete from participants where id = ?', [id], function(req, res) {
            response.send(res);
        });

    });



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
    app.post('/createSession', function(req, resp) {
        session.create(req, resp);
    });
    //getting existing sessions
    app.get('/getSessions', function(req, resp) {
        
        var sessionsQuery = "select sessions.id, sessions.title as title, users.firstName, users.lastName, locations.title as location, sessions.date, sessions.status FROM sessions JOIN users  ON sessions.presenterId = users.id JOIN locations ON sessions.locationId = locations.id";
        
        db.config.query(sessionsQuery, function(err, rows) {                        
            resp.send(rows);
        });
    });


       //getting existing sessions
    app.get('/getSession/:id', function(req, resp) {

        var sessionQuery = "select sessions.id, sessions.description,  sessions.title as title, users.firstName, users.lastName, locations.title as location, sessions.date, sessions.status FROM sessions JOIN users  ON sessions.presenterId = users.id JOIN locations ON sessions.locationId = locations.id where sessions.id=?"; 
        var sessionId = req.params.id;
        db.config.query(sessionQuery, [sessionId], function(err, rows) {                        
            resp.send(rows[0]);
        });
    });

    //new updates of scheduled sessions before date
    app.put('/index/:id', function(request, response) {

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
        var ssid = request.params.id;
        var query = db.config.query('delete from sessions where ssid = ?', [ssid], function(req, res) {
            response.send(res);
        })

    });


    app.get('/usessions', function(request, response) {

        var username = request.user.firstname;
        var email = request.user.email;
        var ssid = request.body.ssid;
        var query = db.config.query("select * from sessions where name =?", [username], function(req, res) {
            response.send(res);
        });

    });

    app.post('/ratings/:id', function(request, response) {

        var participant = request.body.participant;
        var ssid = request.body.ssid;
        var pscore = request.body.pscore;
        var tscore = request.body.tscore;
        var query = db.config.query('insert into feedback(participant,ssid,pscore,tscore) values(' + "'" + participant + "'" + "," + "'" + ssid + "'" + "," + "'" + pscore + "'" + "," + "'" + tscore + "'" + ');', function(req, res) {
            response.send(res);
        });
    })

    app.get('/ratings/:id', function(request, response) {
        var username = request.user.firstname;
        var ssid = request.params.id;
        var query = db.config.query("select * from feedback where ssid =?", [ssid], function(req, res) {
            response.send(res);
        });
    });
};