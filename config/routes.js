var index = require('../app/controller/index');
var user =require('../app/controller/user');
var admin =require('../app/controller/admin');
var requests = require('../app/controller/requests');
var db = require('../db');


exports.init = function(app, passport,auth,smtpTransport) {
    console.log('Initializing Routes');


    // Routes
    app.get('/api', function(request, response) {
        response.send('Library API is running');
    });

    // app.all('/auth/*', auth.requiresLogin, auth.user.hasAuthorization);
    //default route home router
    app.get('/',index.render);
    // registration page
    app.get('/signup',index.register);
    // app.get('/profile', auth.user.hasAuthorizationToPage, index.profile);
   
    //signin page
    app.get('/signinn',user.signin);
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

    app.get('/requests',requests.render);

    //admin module
    app.get('/adminhome',auth.requiresLogin,auth.user.hasAuthorization,admin.render);

    //user module
    app.get('/userhome',auth.requiresLogin,auth.user.hasAuthorization,user.userhome);

    // admin rest Mysql
    app.get('/admin',auth.user.hasAuthorizationToPage, function(request, response) {
        console.log("form feedback page");
        console.log("Admin checking"+request.user.username);
     var query = db.config.query('SELECT * FROM sessions', function(req, res) {
            console.log(res);
            response.send(res);
        });
        console.log(query.sql);
    });
    // user rest Mysql
    app.get('/usessions',auth.user.hasAuthorizationToPage,function(request, response) {
        console.log("test" + request.params.pname);
        console.log(request.user.username);
        db.config.query("select * from sessions where pname =?", [request.user.username], function(req, res) {
            //console.log(res);
            response.send(res);
        });
    });
    // individual session participants rest Mysql for presenter
    app.get('/participants/:id', function(request, response) {
        console.log("sessions get request");
        console.log(request.user.id);
        console.log("testing participants" + request.params.id);
        presenter = request.user.username;
        console.log("presenter in get"+presenter);
    var query = db.config.query('select * from participants where ssid =? and name_presenter =?',[request.params.id,presenter], function(req, res) {
            console.log("sss"+res);
            response.send(res);
        });
        
        console.log(query.sql);
    });

    // individual session participants rest Mysql for Admin
    app.get('/aparticipants/:id', function(request, response) {
        console.log("sessions get request");
        console.log(request.user.id);
        console.log("testing participants" + request.params.id);
        presenter = request.user.username;
        console.log("presenter in get"+presenter);
    var query = db.config.query('select * from participants where ssid =?',[request.params.id], function(req, res) {
            console.log("sss"+res);
            response.send(res);
        });
        
        console.log(query.sql);
    });

    //feedback from participants
    app.get('#/userfeedback/:id',index.feedback);

    // individual session feedback in graph rest Mysql
    app.get('/ratings/:id', function(request, response) {
        //console.log("test" + request.params.id);

        db.config.query('select * from feedback where ssid =' + request.params.id, function(req, res) {
            console.log(res);
            response.send(res);
        });
    });





     // new user registration
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

     
    //user sigin and authentication
    app.post('/signin',
        passport.authenticate('local-login', {
            successRedirect: '/auth/success',
            failureRedirect: '/',
            failureFlash: 'failure message...'
        }));

    //adding new sessions from admin
    app.post('/index', function(request, response) {
        console.log("post");
        // console.log(request.body.ssid);
        console.log(request.body.tname);
        // var ssid = request.body.ssid;
        var tname = request.body.tname;
        var pname = request.body.pname;
        var pst_date = request.body.pst_date;
        var query = db.config.query('insert into sessions(tname,pname,pst_date) values(' + "'" + tname + "'" + "," + "'" + pname + "'" + "," + "'" + pst_date + "'" + ');', function(req, res) {
            console.log(res);
            response.send(res);
        });
        console.log(query.sql);
    });

    //adding new sessions from user 
    app.post('/usessions',auth.user.hasAuthorizationToPage,function(request, response) {
        
        var tname = request.body.tname;
        var pname = request.user.username;
        var pst_date = request.body.pst_date;
        var query = db.config.query('insert into sessions(tname,pname,pst_date) values(' + "'" + tname + "'" + "," + "'" + pname + "'" + "," + "'" + pst_date + "'" + ');', function(req, res) {
            console.log("last insert id"+res.insertId);
        //response.send(res);
            db.config.query("select * from sessions where ssid =?", [res.insertId], function(req, res) {
                console.log(res);
                response.send(res);
            });

        });

        

        console.log(query.sql);
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
    // adding new participants for new sessions
    app.post('/participants', function(request, response) {
        var ssid = request.body.ssid;
        var tname = request.body.topic_name;
        var pname = request.body.partc_name;
        var pst_date = request.body.email;
        var presenter =request.user.username;
        console.log("presenter name"+presenter);
        var query = db.config.query('insert into participants(ssid,partc_name,name_presenter,email) values(' + ssid + "," + "'" + pname + "'" + "," + "'" + presenter + "'" + "," + "'" + pst_date + "'" + ');', function(req, res) {
           
            response.send(res);
        });
        console.log(query.sql);
    });


    // app.get('/ratingss/:id', home.render);



    
    app.post('/ratings/:id', function(request, response) {

        var ssid = request.body.ssid;
        var user = request.body.user;
        // var email = request.body.email;
        var pskills = request.body.pskills;
        var tskills = request.body.tskills;
        var timestamp = request.body.timestamp;
        var status = request.body.userStatus;

        //console.log(status);

        var query = db.config.query('insert into feedback(ssid,user,pskills,tskills,timestamp,status) values(' + ssid + "," + "'" + user + "'" + "," + "'" + pskills + "'" + "," + "'" + tskills + "'" + "," + timestamp + "," + status + ');', function(req, res) {
            console.log(res);
            response.send(res);
        });
        console.log(query.sql);
    });




    app.get('/send', function(req, res) {

        //var id = new Date().getTime() + Math.random();

        var emailsep = req.query.to.split(',');
        //console.log(emailsep);
        var ssid = req.query.ssid;
        console.log(ssid);
        for (var i = 0; i < emailsep.length; i++) {
            console.log(emailsep[i]);
            var id = Math.floor(Math.random() * 90000) + 10000;
            console.log("id" + id);

            var query = db.config.query('insert into idgeneration(ssid,timestamp) values(' + ssid + "," + id + ');', function(req, resp) {
                console.log("response" + resp);


            });
            var mailoptions = {
                to: emailsep[i],
                subject: req.query.subject,
                html: "<b>please click on below link to submit your feedback</b>" + '<br/><a href="http://localhost:3000/#userfeedback/' + id + '">feedback</a>'


            }

            smtpTransport.sendMail(mailoptions, function(error, response) {
                if (error) {
                    console.log(error);
                    res.end("error");
                } else {
                    console.log("message sent" + response.message);
                    res.end("sent");
                }
            });

        }

        console.log(query.sql);

    });

};
