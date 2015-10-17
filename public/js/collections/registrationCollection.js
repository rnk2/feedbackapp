define(['jquery','backbone','router','registrationsBoard'], function($, Backbone,BaseRouter,RegistrationModel) {
  


var Registrations=Backbone.Collection.extend({
    model:RegistrationModel,
    // url : '/signup',

    initialize:function(){
        console.log("collection created from base");

        
    }
    
});


  var rgsobj= new Registrations();
  
  return rgsobj;

 });
