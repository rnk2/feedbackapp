define(['jquery', 'backbone'], function($, Backbone) {
    
var Meeting = Backbone.Model.extend({
	urlRoot : '/sessions/',
    idAttribute : 'id',
    defaults: {
        
        topic_name :'unknown',
        partc_name :'unknown',
        email :'unknown'
              
    },

    initialize:function(){
        console.log("model created from base");
        
    }
    
});


return Meeting;
       
});

