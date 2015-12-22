define(['backbone'], function(Backbone) {
    
var sessionModel = Backbone.Model.extend({
        // urlRoot : function(){
        //     return this.get("currentRoot");
        // },   

        urlRoot : '/newsessions',
    initialize:function(){

    	console.log("inside add sessionModel");
    }
    
});

    
return sessionModel;
       
});

