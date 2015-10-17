exports.render = function(req, res, next) {
    res.render('profile.html', {
        msg: "Welcome"
    });
};


