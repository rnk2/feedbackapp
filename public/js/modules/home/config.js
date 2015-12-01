define(['jquery', 'backbone','home','feedBoard', 'feedsBoard','feedview','header'], function($,Backbone,HomeView,FeedModel,FeedCollection,FeedView,HeaderView) 
{
   
        
    var feedapp = Backbone.Router.extend({

          

        routes: {
            '': 'home',
            'userfeedback/:id' : 'userfeedback'
            

        },

        home: function() {
           
            
            
            if (!this.homeView) {
                this.homeView = new HomeView();
                this.headerView = new HeaderView();
            }
            $('.displayBoard').html(this.homeView.render().el);
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
