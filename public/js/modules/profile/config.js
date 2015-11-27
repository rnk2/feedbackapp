define(['jquery', 'backbone','profile'], function($,Backbone,ProfileView) 
{
   
        
    var feedapp = Backbone.Router.extend({

          

        routes: {
            '': 'profile'
            

        },

        profile: function() {

            console.log("profile page from router config");
            if (!this.profileView) {
                this.profileView = new ProfileView();
            }
            $('.displayBoard').html(this.profileView.render().el);

        },

        
      
    });

    return feedapp;

});
