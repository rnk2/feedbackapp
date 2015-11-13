require.config({
    baseUrl: 'js',
    paths: {

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
        'registrationsBoard': 'collections/registrationCollection',
        'signinsBoard': 'collections/signinCollection',
        'userSessions': 'collections/userCollection',
        'home': 'views/homeView',
        'technologies': 'views/technologiesView',
        'sessions': 'views/sessionsView',
        'feedback': 'views/adminView',
        'rating': 'views/ratingView',
        'register': 'views/registerView',
        'signin': 'views/signinView',
        'feedview': 'views/feedView',
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


require(["app"], function(app) {
    app.start();
});
