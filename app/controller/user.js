exports.signin = function(req, res, next) {
    if (!req.user) {
        res.render('layout.html');
    } else {
        res.redirect('/success');
    }
};

exports.userhome = function(req, res, next) {
    res.render('userhome.html', {});
};

exports.dashboard = function(req, res) {
		res.render('layout.html', {"user" : {
			"email" : req.user.email,
			"firstname" : req.user.firstname,
			"lastname" : req.user.lastname,
			"roleid" : req.user.roleid,
			"signedIn" : true
		}});
}

