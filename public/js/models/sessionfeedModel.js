define(['jquery', 'backbone'], function($, Backbone) {
    
var Meeting = Backbone.Model.extend({
	urlRoot : '/sessions/:id',
    defaults: {
        sno : '',
        ssid :'',
        user :'',
       
    },

    initialize:function(){
        console.log("model created from sessions");
        
    }
    
});


return Meeting;
       
});

