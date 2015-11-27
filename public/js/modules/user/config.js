define(['jquery', 'backbone',
    'modelBoard', 'collectionBoard',
    'userSession', 'userSessions',
    'user','mailers','mailer',
    'sessionBoard',
    'sessionsBoard','participant',
    'participants',
    'home', 'requests',
    'feedview','sessions', 
    'feedback', 'rating',
    'feedBoard', 'feedsBoard'
    ], function($,Backbone,
        Mboard,BaseCollection,
        UserModel,UserCollection,
        UserView,MailingCollection,
        MailModel,SessionModel,
        SessionCollection,ParticipantsModel,
        ParticpantesCollection,
        HomeView, TechnologiesView,
        FeedView,SessionsView, 
        FeedbackView, RatingView,
        FeedModel, FeedCollection,
        RatingModel, RatingsCollection
        
         ) {
   
        
    var feedapp = Backbone.Router.extend({

          

        routes: {
            
            '': 'userHome',
            'sessionss/:id': 'sessions',     
            'ratingss/:id': 'ratings',
            'requests' : 'requests',
            'logout' : 'logout'
            },

        userHome : function() {
            console.log("inside userhome module");
           
            //console.log(new BaseCollection());
            if (!this.userView) {
                this.userView = new UserView({collection: UserCollection});
            }
            $('.displayBoard').html(this.userView.render().el);

        },

        sessions: function(id) {
            
                console.log("from user sessions");
                this.sessionsView = new SessionsView({
                    collection : {
                        partc : new SessionCollection(),
                        ratings : new FeedCollection(),
                        sessions : new BaseCollection()
                    },
                    mid : id
                });
            
            $('.displayBoard').html(this.sessionsView.render().el);

        },

     ratings: function(id) {
            console.log("rating page");
            console.log(id);

            console.log(id);
            
                this.ratingView = new RatingView({collection:FeedCollection,mid : id});
               
            
            $('.displayBoard').html(this.ratingView.render().el);
        },

        logout : function() {
            window.location.href = 'http://localhost:3000/logout'
        },

        requests : function(){
            window.location.href = 'http://localhost:3000/requests'
        }

       
       

    });

    return feedapp;

});
