define(['jquery','backbone','router','participant'], function($, Backbone,BaseRouter,ParticipantModel) {
  


var Meetings=Backbone.Collection.extend({
    model:ParticipantModel,
    url: function () {
        return '/sessions/' + this.id;
        
    },

    initialize:function(){
        console.log("collection created from sessions");

        
    }
    
});


  
  return Meetings;

 });
