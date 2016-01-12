define(['jquery', 'backbone',
        'views/dashboardView',        
        'userSessions', 'sessionDetails',        
        'appUser', 'mysessions',
        'participants', 'mySessionsDetails',
        'ratingCollection', 'sessionRating', 'ratingsView'
    ],
    function($, Backbone,
        DashboardView,        
        UserSessions, SessionDetails,        
        appUser, MySessions,
        Participants, MySessionsDetails,
        RatingCollection, SessionRating, Ratings) {

        /*Render header and footer*/
        require(["views/header", "views/footer"], function(HeaderView, FooterView) {            
            new HeaderView();
            new FooterView();
        });


        var AppRouter = Backbone.Router.extend({
            routes: {
                '': 'dashboard',
                'viewCurrentSessions': 'viewCurrentSessions',
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
                require(["views/createSessionFormView"], function(CreateSessionFormView) {                    
                   new CreateSessionFormView();                   
                });
            },

            viewCurrentSessions: function() {
                require(["views/sessionsList"], function(SessionsListView) {                    
                    new SessionsListView();
                });
            },

            sessiondetails: function(id) {                
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