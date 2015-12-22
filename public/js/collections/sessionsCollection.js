define(['jquery','backbone','sessionModel'], function($, Backbone,BaseRouter,SessionModel) {
  


var Meetings=Backbone.Collection.extend({
    model:UserModel,

    // url : '/usessions',
    url: function () {    	   
        return '/usessions';
        
    },

    initialize:function(){
        console.log("collection created from base");
        
        
    }
    
});


  var meetingsobj= new Meetings();
  // console.log(meetingsobj);
  return meetingsobj;

 });