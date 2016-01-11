require.config({
    baseUrl: 'js',
    paths: {
        'appHome': 'modules/home/app',
        'configHome': 'modules/home/config',
        'appSignin': 'modules/signin/app',
        'configSignin': 'modules/signin/config',
        'appDashboard' : 'modules/dashboard/app',
        'configDashboard' : 'modules/dashboard/config',
        'appAdminHome' : 'modules/admin/app',
        'configAdminHome': 'modules/admin/config',
        'appRegister' : 'modules/register/app',
        'configRegister' : 'modules/register/config',
        'appProfile' : 'modules/profile/app',
        'configProfile' : 'modules/profile/config',
        'appUserHome' : 'modules/user/app',
        'configUserHome' : 'modules/user/config',
        'appRequest': 'modules/requests/app',
        'configRequest' : 'modules/requests/config',
        'jquery': 'lib/jquery',
        'jquery-ui' : 'lib/jquery-ui',
        'backbone': 'lib/backbone',
        'underscore': 'lib/underscore',
        'bootstrap': 'lib/bootstrap',
        'starRating' : 'lib/star-rating',
        'handlebars': 'lib/handlebars.runtime',
        'helpers' : 'helpers',
        'chart': 'lib/chart',
        'dateformat': 'lib/jquery-dateFormat-1.0',
        'datepicker': 'lib/bootstrap-datetimepicker',
        'user' : 'models/userModel',
        'userSessions': 'collections/userCollection',
        'registrationBoard': 'models/registrationModel',
        'signinBoard': 'models/signinModel',
        'signinsBoard': 'collections/signinCollection',
        'sessionModel': 'models/session',
        'sessionCollection' : 'collections/sessionsCollection',
        'ratingModel': 'models/ratingsModel',
        'ratingCollection' : 'collections/ratingsCollection',
        'participant': 'models/participantsModel',
        'participants': 'collections/participantsCollection',
        'userSession': 'models/mySessionModel',
        'registerView': 'views/registerView',
        'signinView': 'views/signinView',
        'dashboardview': 'views/dashboardview',
        'sessionFormView': 'views/sessionFormView',
        'viewSessions' : 'views/viewSessions',
        'sessionDetails' : 'views/sessionDetails',
        'mysessions' : 'views/mySessionsView',
        'mySessionsDetails' : 'views/mySessionsDetails',
        'sessionRating' : 'views/sessionRating',
        'ratingsView' : 'views/ratingsView',
        'homeView': 'views/homeView',
        'forgotPasswordView' : "views/forgotPasswordView",
        'router': 'routers/router',
        'mailers': 'collections/mailCollection',
        'mailer': 'models/mailModel',
        'headerView':'views/headerView',
        'footerView' : 'views/footerView',
        "templates" : "templates/",
        "validation" : "lib/formValidation",
        "access" : "lib/access",
        "validatorMap" : "lib/validatorMap",
        "errorMap" : "lib/errorMap",
        "validators" : "validators",
        "errorMessages" : "errorMessages",
        "views" : "views",
        "collections" : "collections",
        "models" : "models",
        "templates" : "templates"
    },
    shim: {
        underscore: {
            exports: '_'

        },
        handlebars: {
            exports: 'Handlebars'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        bootstrap : {
            deps : ['jquery']
        }
    }
});


