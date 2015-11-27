exports.render = function(req, res, next) {
    
	console.log("track here");

    res.render('index.html', {
        msg: "Welcome"
    });
};


exports.home = function(req, res, next) {
	console.log("login success");
	console.log(req.user);
    res.json(req.user);
};

exports.profile = function(req, res, next) {
    res.render('profile.html', {});
};

exports.register = function(req, res, next) {
    res.render('register.html', {});
};

exports.feedback = function(req, res, next){
	console.log("track feedback here");
	res.render('feedback.html',{});
}