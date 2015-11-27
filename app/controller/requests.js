exports.render = function(req, res, next) {
    
	console.log("track here");

    res.render('requests.html', {
        msg: "Welcome"
    });
};