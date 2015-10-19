define(['jquery', 'backbone'], function($, Backbone) {
    
var Session = Backbone.Model.extend({
	urlRoot : '/sessions',
    defaults: {
        ssid :'',
        user :'',
        email :'',
        presntationskills	: '',
        technicalskills	: '' 
            
    },

    initialize:function(){
        console.log("model created from base");
        
    }
    
});


return Session;
       
});

