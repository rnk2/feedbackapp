define(['jquery', 'backbone'], function($, Backbone) {
    
var Meeting = Backbone.Model.extend({
	urlRoot : '/aparticipants',
    idAttribute : 'id',
    defaults: {
        
        
        partc_name :'unknown',
        email :'unknown'
       
    },

    initialize:function(){
        console.log("inside participants model");
        
    }
    
});


return Meeting;
       
});

