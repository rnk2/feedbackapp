define(['backbone'], function(Backbone) {
    
var UserModel = Backbone.Model.extend({
        urlRoot : function(){
            return this.get("currentRoot");
        },   
    initialize:function(){

    	console.log("from usermodel");
    }
    
});

    
return UserModel;
       
});