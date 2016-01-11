define(['jquery', 'backbone',
        'dashboardview', 'views/createSessionFormView',
        'sessionCollection', 'viewSessions',
        'userSessions', 'sessionDetails',
        'headerView', 'footerView',
        'appUser', 'mysessions',
        'participants', 'mySessionsDetails',
        'ratingCollection', 'sessionRating', 'ratingsView'
    ],
    function($, Backbone,
        DashboardView, CreateSessionFormView,
        SessionCollection, ViewSessions,
        UserSessions, SessionDetails,
        HeaderView, FooterView,
        appUser, MySessions,
        Participants, MySessionsDetails,
        RatingCollection, SessionRating, Ratings) {

        var app = {};

        app.header = new HeaderView();
        app.footer = new FooterView();
       
        var AppRouter = Backbone.Router.extend({
            routes: {
                '': 'dashboard',
                'viewsessions': 'viewsessions',
                'createSession': 'createSession',
                'sessiondetails/:id': 'sessiondetails',
                'mysessiondetails/:id': 'mySessions',
                'userSessions': 'userSessions',
                'ratings/:id': 'ratings',
                'feedback/:id': 'feedback'                
            },

            dashboard: function() {
                var dashboardView = new DashboardView();
            },

            createSession: function() {
                new CreateSessionFormView();
            },

            viewsessions: function() {
                console.log("view sessions");
                var viewsessions = new ViewSessions({
                    collection: {
                        sessions: new SessionCollection()
                    }
                });
            },

            sessiondetails: function(id) {
                console.log("specific sessions");
                console.log(id);
                var sessiondetails = new SessionDetails({
                    collection: {
                        sessions: new SessionCollection(),
                        participants: new Participants()
                    },
                    mid: id
                });
            },

            mySessions: function(id) {
                console.log("my sessions");
                var sessiondetails = new MySessionsDetails({
                    collection: {
                        sessions: new SessionCollection(),
                        participants: new Participants()
                    },
                    mid: id
                });
            },


            userSessions: function() {
                console.log("from user sessions");
                var usersessions = new MySessions({
                    collection: UserSessions
                });
            },

            ratings: function(id) {
                // alert("test");
                var ratings = new Ratings({
                    collection: {
                        ratings: new RatingCollection()
                    },
                    mid: id
                });
            },

            feedback: function(id) {
                console.log("feedback: " + id);
                console.log(RatingCollection);
                var sessionRatings = new SessionRating({
                    collection: {
                        sessions: new SessionCollection(),
                        ratings: new RatingCollection()
                    },
                    mid: id
                })
            }

        });
        return AppRouter;
    });