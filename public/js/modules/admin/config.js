define(['jquery', 'backbone','header'], function($,Backbone,HeaderView,
        
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

            
        },

        sessions: function(id) {
            
            
                

        },

        ratings: function(id) {
            
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
