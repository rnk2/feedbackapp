define(['backbone','ratingModel'], function(Backbone,RatingModel) {
  


var Feedback=Backbone.Collection.extend({

    model:RatingModel,

    url: function () {    
          console.log(this.id);	   
         return '/ratings/' + this.id;
        
    },

    initialize:function(){
        console.log("collection created from ratings");
        
        
    }
    
});

  return Feedback;

 });