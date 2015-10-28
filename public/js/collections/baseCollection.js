define(['jquery','backbone','router','modelBoard'], function($, Backbone,BaseRouter,BaseModel) {
  


var Meetings=Backbone.Collection.extend({
    model:BaseModel,
    url : '/index',

    initialize:function(){
        console.log("collection created from base");

        
    }
    
});


  // var meetingsobj= new Meetings();
  // console.log(meetingsobj);
  return Meetings;

 });
