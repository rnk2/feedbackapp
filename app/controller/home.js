exports.render = function(req, res, next) {
    res.render('index.html', {
        msg: "Welcome"
    });
};


