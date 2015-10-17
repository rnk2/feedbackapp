define(['jquery', 'backbone'], function($, Backbone) {
    
var Signin = Backbone.Model.extend({
	urlRoot : '/signin',   

    initialize:function(){
        console.log("model created from base");
        
    }
    
});


return Signin;
       
});

