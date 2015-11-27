define(['jquery', 'backbone'], function($, Backbone) {
    
var Rating = Backbone.Model.extend({
	urlRoot : '/ratings/:mid',
    defaults: {
        ssid :'',
        user :'',
        email :'',
        pskills : '',
        tskills : '',
        timestamp:''
        
            
    },

    initialize:function(){
        console.log("model created from feedmodel");
       
        
    }
    
});


return Rating;
       
});

