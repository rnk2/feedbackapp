exports.render = function(req, res, next) {	
   	if (!req.user) {
        res.render('layout.html');
    } else {
        res.redirect('/dashboard');
    }
};

exports.errorRoute = function(req, res){
    var errorMessage = req.flash("error")[0];
    
    if(!errorMessage) {
        errorMessage = "Something went wrong. Please try again.";
    }

    res.json({errorMessage : errorMessage});
    return;    
}


exports.home = function(req, res, next) {
    res.json(req.user);
};

exports.profile = function(req, res, next) {
    res.render('profile.html', {});
};

exports.register = function(req, res, next) {
    res.render('layout.html', {});
};

exports.feedback = function(req, res, next){
	console.log("track feedback here");
	res.render('feedback.html',{});
}

