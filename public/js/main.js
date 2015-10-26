require.config({
    baseUrl: 'js',
    paths: {

        'jquery': 'lib/jquery',
        'backbone': 'lib/backbone',
        'underscore': 'lib/underscore',
        'handlebars': 'lib/handlebars',
        'bootstrap': 'lib/bootstap',
        'chart': 'lib/chart',
        'feedstar': 'feedstar',
        'dateformat': 'lib/jquery-dateFormat-1.0.js',
        'modelBoard': 'models/baseModel',
        'feedBoard': 'models/feedModel',
        'registrationBoard': 'models/registrationModel',
        'signinBoard': 'models/signinModel',
        'participant' : 'models/participantsModel',
        'sessionBoard' : 'models/mailModel',
        'collectionBoard': 'collections/baseCollection',
        'sessionsBoard' : 'collections/mailCollection',
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
        'mailing': 'views/mailingView',
        'presenter' : 'views/presenterView'

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
