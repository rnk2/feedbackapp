var routes = {
    /*Home page & static pages*/
    "/": {
        module: {
            "app": "appHome",
            "config" : "configHome"
        }
    },
    "/signin": {
        module: {
            "app": "appSignin"
        }
    },
    "/signup": {
        module: {
            "app": "appRegister"
        }
    },

    '/dashboard' : {
        module : {
            "app" : "appDashboard"
        }
    },

    "/adminhome": {
        module: {
            "app": "appAdminHome"
           
        }
    },

    "/profile": {
        module: {
            "app": "appProfile"
           
        }
    },

    "/userhome": {
        module: {
            "app": "appUserHome"
           
        }
    },

    "/requests":{
        module:
        {
            "app": "appRequest"
        }
    }    
};

function getRoute() {
    var module;
    if (routes[location.pathname]) {
        module = routes[location.pathname];
        console.log( "from main"+module);
    }
    return module;
}

var r = getRoute();

console.log(r);

/*Path relative to js folder*/
require(["requireConfig"],function(){
    require([r.module.app], function(app) {
        app.start();
    });
});

