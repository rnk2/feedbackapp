define(['jquery','backbone','router','signinBoard'], function($, Backbone,BaseRouter,SigninModel) {
  


var Signins=Backbone.Collection.extend({
    model:SigninModel,
    urlRoot : '/login',

    initialize:function(){
        console.log("collection created from base");

        
    }
    
});


  var meetingsobj= new Signins();
  console.log(meetingsobj);
  return meetingsobj;

 });
