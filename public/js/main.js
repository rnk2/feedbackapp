require.config({
    baseUrl: 'js',
    paths: {

        'jquery': 'lib/jquery',
        'backbone': 'lib/backbone',
        'underscore': 'lib/underscore',
        'handlebars': 'lib/handlebars',
        'bootstrap': 'lib/bootstrap',
        'chart': 'lib/chart',
        'feedstar': 'feedstar',
        'dateformat': 'lib/jquery-dateFormat-1.0.js',
        'modelBoard': 'models/baseModel',
        'feedBoard': 'models/feedModel',
        'registrationBoard': 'models/registrationModel',
        'signinBoard': 'models/signinModel',
        'participant' : 'models/participantsModel',
        'sessionBoard' : 'models/sessionfeedModel',
        'collectionBoard': 'collections/baseCollection',
        'sessionsBoard' : 'collections/sessionfeedCollection',
        'feedsBoard': 'collections/feedCollection',
        'participants' : 'collections/participantsCollection',
        'registrationsBoard': 'collections/registrationCollection',
        'signinsBoard': 'collections/signinCollection',
        'home': 'views/homeView',
        'technologies': 'views/technologiesView',
        'sessions': 'views/sessionsView',
        'feedback': 'views/feedbackView',
        'rating': 'views/ratingView',
        'register': 'views/registerView',
        'signin': 'views/signinView',
        'feedview': 'views/feedView',
        'router': 'routers/router',
        'mailers' : 'collections/mailCollection',
        'mailer' : 'models/mailModel', 
        'mailing': 'views/mailingView',
        'presenter' : 'views/presenterView',
        'user' : 'views/userView'

    },

    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }


});


require(["app"],function(app){
    app.start();
});
