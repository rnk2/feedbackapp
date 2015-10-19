define(['jquery', 'backbone'], function($, Backbone) {
    
var Registration = Backbone.Model.extend({
	urlRoot : '/signup',
    defaults: {
        username : 'unknown',
        password :'unknown'
        // email:'unknown'
              
    },

    initialize:function(){
        console.log("model created from rating");
        
    }
    
});


return Registration;
       
});