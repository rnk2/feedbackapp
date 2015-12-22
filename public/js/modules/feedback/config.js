define(['jquery', 'backbone',
    
    ], function($,Backbone,
        
         ) {
   
        
    var feedapp = Backbone.Router.extend({

          

        routes: {
            
            
            '': 'feedback',
            'sessionss/:id': 'sessions',
            'ratingss/:id': 'ratings',
            'logout' : 'logout'
            

        },


        feedback: function() {

            
        },

        sessions: function(id) {
            
            
               

        },

        ratings: function(id) {
           
        },


        logout : function() {
            window.location.href = 'http://localhost:3000/logout'
        }

       
       

    });

    return feedapp;

});
