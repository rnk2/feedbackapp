define(['jquery', 'backbone'], function($, Backbone) {
    
var Meeting = Backbone.Model.extend({
	urlRoot : '/index',
    defaults: {
        ssid :'null',
        tname :'unknown',
        pname :'unknown',
        pst_date:'unknown'
              
    },

    initialize:function(){
        console.log("model created from base");
        
    }
    
});


return Meeting;
       
});

