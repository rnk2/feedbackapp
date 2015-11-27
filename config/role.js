var roleStateMap = {
    "Admin": ["Admin", "Profile","NewParticipants"],
    "User": ["Requests","Profile","AddSessions","Ratings","UserHome","NewParticipants"]
    
    
}



var navItemsMaps = {
    Admin:{
        name:"Admin",
        url:"/admin"
    },
    Dashboard: {
        name: "Dashboard",
        url: "/dashboard"
    },
    
    Requests: {
        name: "Requests",
        url: "/requests"
    },
    Registrants: {
        name: "Registrants",
        url: "/profile#/list"
    },
    Profile : {
        name : "Profile",
        url : "/profile"
    },
    AddSessions : {
        name : "NSessions",
        url : "/addnew"
    },
    Ratings : {
        name : "Ratings",
        url : "/ratings"
    },
    UserHome : {
        name : "UserHome",
        url : "/usessions"
    },

    NewParticipants : {
        name : "NewParticipants",
        url : "/participants"
    }

};


exports.getTopRole= function(appRoles) {
        var topRole, rolesArray = [];
        appRoles = appRoles || [];
        console.log("current module :"+appRoles);
        
        if (appRoles == "Admin") {
            topRole = "Admin";
        } else {
            topRole = "User";
        }
        return topRole;
    };


    exports.getPermittedModules= function(role) {

        var navArray = [];
        var roleStateArray = roleStateMap[role];
        console.log("premit roles"+roleStateArray);

        for (var i = 0; i < roleStateArray.length; i++) {
            navArray.push(navItemsMaps[roleStateArray[i]]);
            //console.log("page authorization"+navArray);
        }

        return navArray;
    };

