var bcrypt = require('bcrypt-nodejs');
var LocalStrategy = require('passport-local').Strategy;
var db = require('../db');
var sq = require('./sql');

// expose this function to our app using module.exports
module.exports = function(passport) {


    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    
    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        db.config.query(sq.user.checkUserById,[id], function(err, rows){
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
        function(request, username, password, done) {
            
            var firstname = request.body.firstname;
            var lastname = request.body.lastname;

            db.config.query(sq.user.checkUser, [username], function(err, user) {
                if (err)
                    return done(err);
                if (user.length) {
                    return done(null, false, request.flash('signupMesssage', 'Username is already taken'));
                } else {
                   db.config.query(sq.user.createUser,[firstname, lastname, username, bcrypt.hashSync(password), 1], function(err, rows) { 
                        if(err){
                            return done(err);
                        }                        
                        var user ={}
                        user.id = rows.insertId;
                        user.name = firstname+" "+lastname;
                        return done(null, user);
                    });
                }
            });

        }));

        //login

        passport.use('local-signin', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'userEmail',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) { // callback with email and password from our form
                db.config.query(sq.user.checkUser,[username], function(err, rows){

                if (err){
                    return done(err);
                }
                    
                if (!rows.length) {
                    return done(null, false,req.flash('error', 'Oops! Username is not available.')); // req.flash is the way to set flashdata using connect-flash
                }

                // if the user is found but the password is wrong
                if (!bcrypt.compareSync(password, rows[0].password))
                {                    // console.log("in passport sessions"+req.session.username);
                    return done(null, false, req.flash('error', 'Oops! Invalid username or password.')); // create the loginMessage and save it to session as flashdata
                }
                // all is well, return successful user
                return done(null, rows[0]);
            });

        }));
};
