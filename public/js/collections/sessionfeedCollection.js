define(['jquery','backbone','router','sessionBoard'], function($, Backbone,BaseRouter,SessionModel) {
  


var Sessions=Backbone.Collection.extend({
    model:SessionModel,
    url : '/sessions',

    initialize:function(){
        console.log("collection created from ratings");

        
    }
    
});


  // var meetingsobj= new Meetings();
  // console.log(meetingsobj);
  return Sessions;

 });
