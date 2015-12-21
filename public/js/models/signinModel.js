define(['jquery', 'backbone'], function($, Backbone) {
    
var Signin = Backbone.Model.extend({
		urlRoot : function(){
			return this.get("currentRoot");
		},   
    initialize:function(){
    }
    
});

	
return Signin;
       
});

