define(['jquery','backbone','router','participant'], function($, Backbone,BaseRouter,ParticipantModel) {
  


var Meetings=Backbone.Collection.extend({
    model:ParticipantModel,
    url : '/partcpates',

    initialize:function(){
        console.log("collection created from participants");

        
    }
    
});


  var meetingsobj= new Meetings();
  console.log(meetingsobj);
  return meetingsobj;

 });
