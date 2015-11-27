var routes = {

    /*Home page & static pages*/
    "/": {
        module: {
            "app": "appHome",
            "config" : "configHome"

        }
    },
    "/signinn": {
        module: {
            "app": "appSignin"
            
        }
    },


    "/signup": {
        module: {
            "app": "appRegister"
           
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
    if (typeof routes[location.pathname] !== "undefined") {
        module = routes[location.pathname];
    }
    return module;
}

var r = getRoute();


require([r.module.app], function(app) {

        // alert("helllo")
        console.log(r.module.app);


    app.start();
});



