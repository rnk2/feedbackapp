define(['jquery', 'backbone','header','home','feedBoard', 'feedsBoard','feedview','requests'], function($,Backbone,HeaderView,HomeView,FeedModel,FeedCollection,FeedView,RequestView) 
{
   
        
    var feedapp = Backbone.Router.extend({

          

        routes: {
            '': 'requests',
            'userfeedback/:id' : 'userfeedback',
            'Requests' : 'Requests'

        },

        home: function() {
           
            
            
            if (!this.homeView) {
                this.homeView = new HomeView();
                
            }
            $('.displayBoard').html(this.homeView.render().el);
            

        },

        requests: function() {
            console.log("technologies page.........");
            if (!this.technologiesView) {
                this.technologiesView = new RequestView();
                this.headerView = new HeaderView();
            }
            $('.displayBoard').html(this.technologiesView.render().el);
            $('.headerBoard').html(this.headerView.render().el);
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
