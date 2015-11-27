define(['jquery', 'backbone',
    'modelBoard', 'collectionBoard',
    'userSession', 'userSessions',
    'user','mailers','mailer',
    'sessionBoard',
    'sessionsBoard','participant',
    'participants',
    'home', 'technologies',
    'feedview','sessions', 
    'feedback', 'rating',
    'register','signin', 
    'feedBoard', 'feedsBoard',
    'registrationBoard','registrationsBoard',
    'signinBoard','signinsBoard'
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
        SignupView,SigninView, 
        FeedModel, FeedCollection,
         RatingModel, RatingsCollection,
         RegisterModel,RegisterCollection,
         SigninModel, SigninCollection
         ) {
   
        
    var feedapp = Backbone.Router.extend({

          

        routes: {
            
            
            '': 'feedback',
            'sessionss/:id': 'sessions',
            'ratingss/:id': 'ratings',
            'logout' : 'logout'
            

        },


        feedback: function() {

            console.log('feedback page');
            //console.log(new BaseCollection());
                this.feedbackView = new FeedbackView({
                    collection: {
                        records: new BaseCollection() }
                });
                console.log('feedback router');
            
            $('.displayBoard').html(this.feedbackView.render().el);
        },

        sessions: function(id) {
            
            
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
        }

       
       

    });

    return feedapp;

});
