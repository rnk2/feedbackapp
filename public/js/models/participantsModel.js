define(['jquery', 'backbone'], function($, Backbone) {
    
var Meeting = Backbone.Model.extend({
	urlRoot : '/partcpates',
    defaults: {
        ssid :'null',
       
        partc_name :'unknown',
        email :'unknown'
              
    },

    initialize:function(){
        console.log("model created from base");
        
    }
    
});


return Meeting;
       
});

