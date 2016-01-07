exports.signin = function(req, res, next) {
    if (!req.user) {
        res.render('layout.html');
    } else {
        res.redirect('/dashboard');
    }
};

exports.userhome = function(req, res, next) {
    res.render('userhome.html', {});
};

exports.dashboard = function(req, res) {
		res.render('layout.html', {"user" : {
			"id" : req.user.id,
			"email" : req.user.email,
			"firstname" : req.user.firstName,
			"lastname" : req.user.lastName,
			"roleid" : req.user.roleId,
			"signedIn" : true
		}});
}

