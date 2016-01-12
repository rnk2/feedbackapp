define(['jquery', 'backbone',
        'views/dashboardView',
        'userSessions',
        'appUser', 'mysessions',
        'collections/participants', 'mySessionsDetails',
        'ratingCollection', 'sessionRating', 'ratingsView'
    ],
    function($, Backbone,
        DashboardView,
        UserSessions,
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
                'viewSession/:id': 'viewSession',
                'mysessiondetails/:id': 'mySessions',
                'userSessions': 'userSessions',
                'ratings/:id': 'ratings',
                'feedback/:id': 'feedback'
            },

            dashboard: function() {
                var dashboardView = new DashboardView();
            },

            createSession: function() {
                require(["views/createSessionForm"], function(CreateSessionFormView) {
                    new CreateSessionFormView();
                });
            },

            viewCurrentSessions: function() {
                require(["views/sessionsList"], function(SessionsListView) {
                    new SessionsListView();
                });
            },

            viewSession: function(id) {
                require(["views/session","models/session"], function(SessionView, SessionModel) {

                    var sessionModel = new SessionModel({                        
                            currentRoute: "/getSession",
                            id: id
                        }
                    );

                    var sessionView = new SessionView({
                        model : sessionModel
                    });

                    sessionModel.fetch({
                        success: function(model) {
                            sessionView.render();
                        },
                        error : function(err, resp) {
                            console.log(resp);
                        }
                    })

                });

                /*         var sessiondetails = new SessionDetails({
                             collection: {
                                 sessions: new SessionCollection(),
                                 participants: new Participants()
                             },
                             mid: id
                         });*/
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