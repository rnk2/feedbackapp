define(['backbone'], function(Backbone) {
    
var FeedbackModel = Backbone.Model.extend({
   urlRoot : '/ratings/:mid',

    
    defaults: {
        
       
              
    },

    initialize:function(){
        console.log("model created from base");
        
    }
    
});

    
return FeedbackModel;
       
});