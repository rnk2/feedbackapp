define(['backbone'], function(Backbone) {
    
var Meeting = Backbone.Model.extend({
	urlRoot : '/partcpates',
    

	
	defaults: {

        
        username :''
        
    },
    initialize:function(){
        console.log("model created from partcpates");
        
    }
    
});


return Meeting;
       
});

