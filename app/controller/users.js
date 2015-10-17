exports.signin = function(req, res, next) {
    log.debug("signin");
    if (!req.user) {
        res.render('layouts/signin.html', {
            title: 'Login'
        });
    } else {
        res.redirect('/success');
    }
};

exports.signout = function(req, res, next) {
    req.logout();
    res.redirect('/');
};

// sign up
// POST
var signUpPost = function(req, res, next) {
   var user = req.body;
   var usernamePromise = null;
   usernamePromise = new Model.User({username: user.username}).fetch();

   return usernamePromise.then(function(model) {
      if(model) {
         res.render('signup', {title: 'signup', errorMessage: 'username already exists'});
      } else {
         //****************************************************//
         // MORE VALIDATION GOES HERE(E.G. PASSWORD VALIDATION)
         //****************************************************//
         var password = user.password;
         var hash = bcrypt.hashSync(password);

         var signUpUser = new Model.User({username: user.username, password: hash});

         signUpUser.save().then(function(model) {
            // sign in the newly registered user
            signInPost(req, res, next);
         });    
      }
   });
};
    