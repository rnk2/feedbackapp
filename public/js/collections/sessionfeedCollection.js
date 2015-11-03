define(['jquery','backbone','router','participant'], function($, Backbone,BaseRouter,ParticipantModel) {
  


var Meetings=Backbone.Collection.extend({
    model:ParticipantModel,
    url: function () {
    	console.log(this.id);
        return '/sessions/' + this.id;
        
    },

    initialize:function(){
        console.log("inside participants collection");

        
    }
    
});


  
  return Meetings;

 });
