define(['backbone','participant'], function(Backbone,ParticipantModel) {
  


var Participants=Backbone.Collection.extend({

    model:ParticipantModel,

    url: function () {    
          console.log(this.id);	   
         return '/partcpates/' + this.id;
        
    },

    initialize:function(){
        console.log("collection created from base");
        
        
    }
    
});


  // var meetingsobj= new Meetings();
  // // console.log(meetingsobj);
  return Participants;

 });