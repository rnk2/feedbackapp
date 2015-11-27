exports.signin = function(req, res, next) {
    console.log(" inside signin");
    if (!req.user) {
        res.render('signin.html', {
            title: 'Login'
        });
    } else {
        res.redirect('/success');
    }
};


exports.userhome = function(req, res, next) {
    res.render('userhome.html', {});
};

