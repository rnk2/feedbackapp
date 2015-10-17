var home = require('../app/controller/home');
var profile = require('../app/controller/profile');
var db = require('../db');

exports.init = function(app, passport,smtpTransport) {
    console.log('Initializing Routes');


    // Routes
    app.get('/api', function(request, response) {
        response.send('Library API is running');
    });


    app.get('/', home.render);
    app.get('/technologies',home.render);

    app.get('/presenter',home.render);

    app.get('/feedback', isLoggedIn, home.render);

    app.get('/signin', home.render);

     app.get('/userfeedback/:id',home.render);

    // app.get('/userfeedback/:id',function(req,res){
    //      console.log(req.params.id);
    //      res.send(req.params.id);
         
    // });
    

    // app.get('/userfeedback/:id',function(request,response){
    //     db.config.query('select * from idgeneration where timestamp =' + request.params.id, function(req, res) {
    //         console.log(res);
    //         response.send(res);
    //     });
    // });
    

    app.get('/signup', home.render);
    app.get('/sessions', isLoggedIn, home.render);
   
    app.get('/logout', function(req, res) {
        req.logOut();
        res.redirect('/');
    });

    app.get('/index', function(request, response) {
        console.log("form feedback page");
        db.config.query('SELECT * FROM feedbacks', function(req, res) {

            response.send(res);
        });
    });

    app.get('/ratingss/:id',home.render);


    app.get('/ratings/:id', function(request, response) {
        console.log("test" + request.params.id);

        db.config.query('select * from registration where ssid =' + request.params.id, function(req, res) {
            console.log(res);
            response.send(res);
        });
    });



    app.post('/ratings/:id', function(request, response) {

        var ssid = request.body.ssid;
        var user = request.body.user;
        var email = request.body.email;
        var pskills = request.body.pskills;
        var tskills = request.body.tskills;
        var timestamp = request.body.timestamp;
        var status = request.body.userStatus;

        console.log(status);

        var query = db.config.query('insert into registration(ssid,user,email,pskills,tskills,timestamp,status) values(' + ssid + "," + "'" + user + "'" + "," + "'" + email + "'" + "," + "'" + pskills + "'" + "," + "'" + tskills + "'" + "," + timestamp + "," + status +');', function(req, res) {
            console.log(res);
            response.send(res);
        });
        console.log(query.sql);
    });


    app.post('/index', function(request, response) {
        console.log("post");
        console.log(request.body.ssid);
        console.log(request.body.tname);
        var ssid = request.body.ssid;
        var tname = request.body.tname;
        var pname = request.body.pname;
        var pst_date = request.body.pst_date;
        var partcp = request.body.partcp;

        var query = db.config.query('insert into feedbacks(ssid,tname,pname,pst_date,partcp) values(' + ssid + "," + "'" + tname + "'" + "," + "'" + pname + "'" + "," + "'" + pst_date + "'" + "," + "'" + partcp + "'" + ');', function(req, res) {



            response.send(res);
        });

        console.log(query.sql);
    });



    app.post('/signin', function(req, res, next) {

        // generate the authenticate method and pass the req/res
        passport.authenticate('local-login', function(err, user, info) {

            if (err) {
                return next(err);
            }
            if (!user) {
                return res.send(JSON.stringify("user not found"))
            };

            // req / res held in closure
            req.logIn(user, function(err) {
                if (err) {

                    return next(err);
                }
                console.log("user logged in");
                return res.send(JSON.stringify(user));
                //res.redirect('/users/' + user.username);
            });

        })(req, res, next);

    });

    app.get('/send', function(req, res) {
       
        //var id = new Date().getTime() + Math.random();

        var ssid =req.query.ssid;
        console.log(ssid);
        var id= Math.floor(Math.random()*90000) + 10000;
        console.log("id"+id);

        var query = db.config.query('insert into idgeneration(ssid,timestamp) values('+ssid+"," +id+ ');',function(req,resp){
             console.log("response"+resp);

        });
         console.log(query.sql);
        var mailoptions = {
            to: req.query.to,
            subject: req.query.subject,
             html: "<b>please click on below link to submit your feedback</b>"            
            +'<br/><a href="http://localhost:3000/userfeedback/'+id+'">feedback</a>'
            

        }
        console.log(mailoptions);
        smtpTransport.sendMail(mailoptions, function(error, response) {
            if (error) {
                console.log(error);
                res.end("error");
            } else {
                console.log("message sent" + response.message);
                res.end("sent");
            }
        });

    });


    app.post('/signup', function(req, res, next) {

        // generate the authenticate method and pass the req/res
        passport.authenticate('local-signup', function(err, user, info) {
            console.log("user" + user);
            if (err) {
                return next(err);
            }
            if (user) {
                return res.send(JSON.stringify(user));
            } else {
                console.log("in else");
                return res.send(JSON.stringify("user already exists"));
            }

        })(req, res, next);

    });




    // app.post('/signup', passport.authenticate('local-signup', {
    //     successRedirect: '/feedback', // redirect to the secure profile section
    //     failureRedirect: '/signup', // redirect back to the signup page if there is an error
    //     failureFlash: true // allow flash messages
    // }));











    // route middleware to make sure a user is logged in
    function isLoggedIn(req, res, next) {
        //console.log(req);
        console.log("ddd" + req.isAuthenticated());
        // if user is authenticated in the session, carry on 
        if (req.isAuthenticated())
            return next();

        // if they aren't redirect them to the home page
        res.redirect('/signin');
    }






};
