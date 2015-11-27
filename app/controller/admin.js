exports.render = function(req, res, next) {
	 res.render('index.html', {
        msg: "Welcome"
    });
};


exports.home = function(req, res, next) {
	
    res.json(req.user);
};




