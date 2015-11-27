define(['jquery','backbone','router','adminParticipant'], function($, Backbone,BaseRouter,ParticipantModel) {
  


var Meetings=Backbone.Collection.extend({
    model:ParticipantModel,
    url: function () {
    	console.log(this.id);
        return '/aparticipants/' + this.id;
        
    },

    initialize:function(){
        console.log("inside participants collection");

        
    }
    
});


  
  return Meetings;

 });