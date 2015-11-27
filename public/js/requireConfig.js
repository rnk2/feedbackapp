require.config({
    baseUrl: 'js',
    paths: {

        'appHome': 'modules/home/app',
        'configHome': 'modules/home/config',
        'appSignin': 'modules/signin/app',
        'configSignin': 'modules/signin/config',
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
        'backbone': 'lib/backbone',
        'underscore': 'lib/underscore',
        'bootstrap': 'lib/bootstrap',
        'handlebars.runtime': 'lib/handlebars.runtime.amd',
        'templates': 'templates/templates',
        'chart': 'lib/chart',
        'feedstar': 'feedstar',
        'dateformat': 'lib/jquery-dateFormat-1.0',
        'datepicker': 'lib/bootstrap-datetimepicker',
        'modelBoard': 'models/baseModel',
        'feedBoard': 'models/feedModel',
        'registrationBoard': 'models/registrationModel',
        'signinBoard': 'models/signinModel',
        'participant': 'models/participantsModel',
        'sessionBoard': 'models/sessionfeedModel',
        'userSession': 'models/userModel',
        'collectionBoard': 'collections/baseCollection',
        'sessionsBoard': 'collections/sessionfeedCollection',
        'feedsBoard': 'collections/feedCollection',
        'participants': 'collections/participantsCollection',
        'adminParticipants': 'collections/adminParticipantsCollection',
        'adminParticipant' : 'models/adminSessionsFeedModel',
        'registrationsBoard': 'collections/registrationCollection',
        'signinsBoard': 'collections/signinCollection',
        'userSessions': 'collections/userCollection',
        'home': 'views/homeView',
        'requests': 'views/requestsView',
        'sessions': 'views/sessionsView',
        'adminSessionsView' : 'views/adminSessionsView',
        'feedback': 'views/adminView',
        'rating': 'views/ratingView',
        'register': 'views/registerView',
        'signin': 'views/signinView',
        'feedview': 'views/feedView',
        'profile' : 'views/profileView',
        'router': 'routers/router',
        'mailers': 'collections/mailCollection',
        'mailer': 'models/mailModel',
        'user': 'views/userView'

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
        

       

    }


});


