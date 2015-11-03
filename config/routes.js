var home = require('../app/controller/home');
var feedback = require('../app/controller/feedback');
var db = require('../db');

exports.init = function(app, passport,smtpTransport) {
    console.log('Initializing Routes');


    // Routes
    app.get('/api', function(request, response) {
        response.send('Library API is running');
    });


    app.get('/', home.render);
    app.get('/technologies',home.render);
    

    app.get('/#feedback',isAdmin, home.render);
    app.get('/#user',isLoggedIn,home.render);

    app.get('/#signin', home.render);

    app.get('/userfeedback/:id',home.render);

    app.get('mailto/:id',isLoggedIn,home.render);
    app.get('/signup', home.render);
    //app.get('/sessions/:id',home.render);
   
    app.get('/logout', function(req, res) {
        req.logOut();
        res.redirect('/');
    });

    app.get('/index',function(request, response) {
        console.log("form feedback page");
        db.config.query('SELECT * FROM sessions', function(req, res) {
            console.log(res);
            response.send(res);
        });
    });

    app.post('/index', function(request, response) {
        console.log("post");
        // console.log(request.body.ssid);
        console.log(request.body.tname);
        // var ssid = request.body.ssid;
        var tname = request.body.tname;
        var pname = request.body.pname;
        var pst_date = request.body.pst_date;
        
        // 407 --- 
        var query = db.config.query('insert into sessions(tname,pname,pst_date) values('+ "'" + tname + "'" + "," + "'" + pname + "'" + "," + "'" + pst_date + "'" + ');', function(req, res) {
         //console.log(res);
            response.send(res);
        });

        console.log(query.sql);
    });

    app.put('/index/:id', function(request, response) {
        console.log("inside put");
        //console.log(request.params.id);
        //console.log(request.body.tname);
        var ssid = request.params.id;
        var tname = request.body.tname;
        var pname = request.body.pname;
        var pst_date = request.body.pst_date;
        

        var query = db.config.query('update sessions set tname = ?,pst_date = ? where ssid = ?',[tname,pst_date,ssid], function(req, res) {
            //console.log(res);
            response.send(res);
        });

        //console.log(query.sql);
    });

    app.delete('/index/:id',function(request,response){
        console.log("inside delete");
        //console.log(request.params.id);
        var ssid = request.params.id; 
        var query = db.config.query('delete from sessions where ssid = ?',[ssid],function(req,res){
            console.log(res);
            response.send(res);
        })

        //console.log(query.sql);


    });

    app.get('/usessions/:pname', function(request, response) {
        console.log("test" + request.params.pname);
        db.config.query("select * from sessions where pname =?",[request.params.pname], function(req, res) {
            //console.log(res);
            response.send(res);
        });
    });

    app.post('/usessions', function(request, response) {
        console.log("post");
        // console.log(request.body.ssid);
        console.log(request.body.tname);
        // var ssid = request.body.ssid;
        var tname = request.body.tname;
        var pname = request.body.pname;
        var pst_date = request.body.pst_date;
        
        // 407 --- 
        var query = db.config.query('insert into sessions(tname,pname,pst_date) values('+ "'" + tname + "'" + "," + "'" + pname + "'" + "," + "'" + pst_date + "'" + ');', function(req, res) {


            //console.log(res);
            response.send(res);
        });

        console.log(query.sql);
    });



    app.get('/sessions/:id',function(request,response){
        console.log("sessions get request");
        //console.log("test" + request.params.id);
        db.config.query('select * from participants where ssid ='+request.params.id,function(req,res){
            //console.log(res);
            response.send(res);
        });
        
    });

    app.post('/sessions',function(request,response){
        console.log("post");
        //console.log(request.body); 
        var ssid = request.body.ssid;
        var tname = request.body.topic_name;
        var pname = request.body.partc_name;
        var pst_date = request.body.email;
        
        var query = db.config.query('insert into participants(ssid,partc_name,email) values(' + ssid + ","+ "'" + pname + "'" + "," + "'" + pst_date + "'" +');', function(req, res) {
            //console.log(res);
            response.send(res);
        });
        console.log(query.sql);
    });


    app.get('/ratingss/:id',home.render);


    app.get('/ratings/:id', function(request, response) {
        //console.log("test" + request.params.id);

        db.config.query('select * from feedback where ssid =' + request.params.id, function(req, res) {
            console.log(res);
            response.send(res);
        });
    });

    app.post('/ratings/:id', function(request, response) {

        var ssid = request.body.ssid;
        var user = request.body.user;
        // var email = request.body.email;
        var pskills = request.body.pskills;
        var tskills = request.body.tskills;
        var timestamp = request.body.timestamp;
        var status = request.body.userStatus;

        //console.log(status);

        var query = db.config.query('insert into feedback(ssid,user,pskills,tskills,timestamp,status) values(' + ssid + "," + "'" + user + "'" + ","+ "'" + pskills + "'" + "," + "'" + tskills + "'" + "," + timestamp + "," + status +');', function(req, res) {
            console.log(res);
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
        
        var emailsep = req.query.to.split(',');
        //console.log(emailsep);
        var ssid =req.query.ssid;
        console.log(ssid);
        for(var i=0;i<emailsep.length;i++){
            console.log(emailsep[i]);
            var id= Math.floor(Math.random()*90000) + 10000;
             console.log("id"+id);
            var query = db.config.query('insert into idgeneration(ssid,timestamp) values('+ssid+"," +id+ ');',function(req,resp){
             console.log("response"+resp);


        });
             var mailoptions = {
            to: emailsep[i],
            subject: req.query.subject,
             html: "<b>please click on below link to submit your feedback</b>"            
            +'<br/><a href="http://localhost:3000/#userfeedback/'+id+'">feedback</a>'
            

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


    // route middleware to make sure a user is logged in
    function isLoggedIn(req, res, next) {
        //console.log(req);
        console.log("ccc" + req.isAuthenticated());
        // if user is authenticated in the session, carry on 
        if (req.isAuthenticated())
            return next();

        // if they aren't redirect them to the home page
        res.redirect('/#signin');
    }

    // route middleware to make sure a admin is logged in
    function isAdmin(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()) {
       // if user is admin, go next
        console.log("ddd" + req.isAuthenticated());
       console.log(req.user.role);
       if (req.user.role == 2) {
         return next();
       } else {
         console.log("user signin");
         res.redirect('/#signin');
       }
    } else {
      res.redirect('/#signin');
    }
}








};
