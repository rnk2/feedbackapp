define(['backbone'], function(Backbone) {
    
var UserModel = Backbone.Model.extend({
    urlRoot : '/usessions',
    idAttribute : 'ssid',

    
    defaults: {
        
       
              
    },

    initialize:function(){
        console.log("model created from base");
        
    }
    
});

    
return UserModel;
       
});