define(['jquery','backbone','sessionModel'], function($,Backbone,SessionModel) {
  


var Meetings=Backbone.Collection.extend({

    model:SessionModel,

    // url : '/usessions',
    url: function () {    	   
        return '/newsessions';
        
    },

    initialize:function(){
        console.log("collection created from base");
        
        
    }
    
});


  var meetingsobj= new Meetings();
  // console.log(meetingsobj);
  return meetingsobj;

 });