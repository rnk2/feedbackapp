define(['jquery', 'backbone','home','feedBoard', 'feedsBoard','feedview'], function($,Backbone,HomeView,FeedModel,FeedCollection,FeedView) 
{
   
        
    var feedapp = Backbone.Router.extend({

          

        routes: {
            '': 'home',
            'userfeedback/:id' : 'userfeedback'
            

        },

        home: function() {
           
            
            
            if (!this.homeView) {
                this.homeView = new HomeView();
            }
            $('.displayBoard').html(this.homeView.render().el);

        },

       
        userfeedback : function(id){
            console.log("userfeedback");
            console.log(id);
            if(!this.feedView){
                this.feedView = new FeedView({collection:FeedCollection,mid : id});
            }

            $('.displayBoard').html(this.feedView.render().el);
        }

      
    });

    return feedapp;

});
