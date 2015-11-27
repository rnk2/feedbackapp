var bcrypt = require('bcrypt-nodejs');
var LocalStrategy = require('passport-local').Strategy;
var db = require('../db');


// expose this function to our app using module.exports
module.exports = function(passport) {


    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        console.log("serializeUser"+user.id);
        done(null, user.id);
    });

    
    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        console.log("deserializeUser");
        db.config.query("SELECT * FROM register WHERE id = ? ",[id], function(err, rows){
            done(err, rows[0]);
        });
    });


    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'
    //Passport takes the req.body.username and req.body.password and passes it to our verification function in the local strategy.


    passport.use('local-signup', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function(request, username, password,done) {
            console.log("local-signup");
            console.log("inside roll checking"+request.body.role);
            var role = "request.body.role";
            db.config.query("select * from register where username = '" + username + "'", function(err, user) {

                if (err)
                    return done(err);
                if (user.length) {
                    // console.log(user.length);
                    return done(null, false, request.flash('signup messsage', 'That username is already taken'));
                } else {
                    console.log("inside roll checking"+request.body.role);
                    var newUserMysql = {
                        role :'User',
                        username: username,
                        password: bcrypt.hashSync(password, null, null),  // use the generateHash function in our user model
                        
                    };
                   var insertQuery = "INSERT INTO register ( username, password,role ) values (?,?,?)"; 
                   //console.log(insertQuery);
                   db.config.query(insertQuery,[newUserMysql.username, newUserMysql.password,newUserMysql.role],function(err, rows) {
                        newUserMysql.id = rows.insertId;

                        return done(null, newUserMysql);
                    });

                   
                }
            });

        }));

        //login

        passport.use('local-login', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'username',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) { // callback with email and password from our form
             
             db.config.query("SELECT * FROM register WHERE username = ?",[username], function(err, rows){
                if (err)
                    return done(err);
                if (!rows.length) {
                    return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
                }

                // if the user is found but the password is wrong
                if (!bcrypt.compareSync(password, rows[0].password))
                {
                    // console.log("in passport sessions"+req.session.username);
                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
                }
                // console.log("in passport sessions"+req.session);
                // all is well, return successful user
                return done(null, rows[0]);
            });

        }));
};
