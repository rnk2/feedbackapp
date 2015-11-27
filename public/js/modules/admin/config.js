define(['jquery', 'backbone',
    'modelBoard', 'collectionBoard',
    'sessionBoard',
    'adminParticipants','participant',
    'adminSessionsView',
    'feedview','sessions', 
    'feedback', 'rating',
    'feedBoard', 'feedsBoard'
    ], function($,Backbone,
        Mboard,BaseCollection,
        SessionModel,
        AdminParticipantsCollection,ParticipantsModel,
        AdminSessionsView,
        FeedView,SessionsView, 
        FeedbackView, RatingView,
        FeedModel, FeedCollection,
         RatingModel, RatingsCollection
         ) {
   
        
    var feedapp = Backbone.Router.extend({

          

        routes: {
           
            '': 'admin',
            'sessionss/:id': 'sessions',
            'ratingss/:id': 'ratings',
            'logout' : 'logout',
            'requests' : 'requests'
     
        },


        admin : function() {

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
            
            
                this.sessionsView = new AdminSessionsView({
                    collection : {
                        partc : new AdminParticipantsCollection(),
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
