define(['jquery','backbone','router','userSession'], function($, Backbone,BaseRouter,UserModel) {
  


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
