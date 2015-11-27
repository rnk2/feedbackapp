roleConfig = require('../role');

exports.requiresLogin = function(req, res, next) {
    if (!req.isAuthenticated()) {
        // return res.json(403, {message: 'Access denied, please log in'});
        res.redirect('/signinn');
        
    } else {
        next();
    }
};


exports.user = {
    hasAuthorization: function(req, res, next) {
        next();
    },
    hasAuthorizationToPage: function(req, res, next) {
        if (!req.isAuthenticated()) {
            res.redirect('/signinn');
        } else {
            console.log("inside hasAuthorization");
            //console.log(req.user.role);

            var defRole = roleConfig.getTopRole(req.user.role);
            console.log("inside defRole"+defRole);
            
            var availModules = roleConfig.getPermittedModules(defRole);
           
            for(var i=0; i<availModules.length; i++){
                if(availModules[i].url == req.route.path){
                    next();
                    return;
                    break;

                }
            }
            res.redirect('/');
        }
    },
    hasOpenSession: function(req, res, next) {
        if (req.isAuthenticated()) {
            res.redirect('/');
        } else {
            next();
        }
    },
    hasAuthorisedRole: function(req, res, next) {

    }

};




