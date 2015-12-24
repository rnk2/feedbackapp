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
        'handlebars': 'lib/handlebars.runtime',
        'helpers' : 'helpers',
        'chart': 'lib/chart',
        'dateformat': 'lib/jquery-dateFormat-1.0',
        'datepicker': 'lib/bootstrap-datetimepicker',
        'sessionModel': 'models/sessionModel',
        'sessionCollection' : 'collections/sessionCollection',
        'modelBoard': 'models/baseModel',
        'registrationBoard': 'models/registrationModel',
        'signinBoard': 'models/signinModel',
        'participant': 'models/participantsModel',
        'sessionBoard': 'models/sessionfeedModel',
        'userSession': 'models/userModel',
        'collectionBoard': 'collections/baseCollection',
        'sessionsBoard': 'collections/sessionfeedCollection',
        'participants': 'collections/participantsCollection',
        'adminParticipants': 'collections/adminParticipantsCollection',
        'adminParticipant' : 'models/adminSessionsFeedModel',
        'registrationsBoard': 'collections/registrationCollection',
        'signinsBoard': 'collections/signinCollection',
        'userSessions': 'collections/userCollection',
        'homeView': 'views/homeView',
        'dashboardview': 'views/dashboardview',
        'createSessionsView': 'views/addSession',
        'sessionDetails' : 'views/sessionDetails',
        'viewSessions' : 'views/viewSessions',
        'registerView': 'views/registerView',
        'signinView': 'views/signinView',
        'forgotPasswordView' : "views/forgotPasswordView",
        'sessionsDetails' : 'views/sessionDetails',
        'router': 'routers/router',
        'mailers': 'collections/mailCollection',
        'mailer': 'models/mailModel',
        'user' : 'models/userModel',
        'headerView':'views/headerView',
        'footerView' : 'views/footerView',
        "templates" : "templates/",
        "validation" : "lib/formValidation",
        "access" : "lib/access",
        "validatorMap" : "lib/validatorMap",
        "errorMap" : "lib/errorMap"
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
        }
    }
});


