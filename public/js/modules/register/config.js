define(['jquery', 'backbone','register','registrationsBoard'], function($,Backbone,RegisterView,RegisterCollection) 
{
   
        
    var feedapp = Backbone.Router.extend({

          

        routes: {
            '': 'signup'
            

        },

        signup: function() {

            console.log("signup page");
            if (!this.signupView) {
                this.signupView = new RegisterView({collection : RegisterCollection});
            }
            $('.displayBoard').html(this.signupView.render().el);

        },

        
      
    });

    return feedapp;

});
