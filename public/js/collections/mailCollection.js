define(['jquery','backbone','router','mailer'], function($, Backbone,BaseRouter,MailModel) {
  


var Meetings=Backbone.Collection.extend({
    model:MailModel,
    url: function () {
        return '/sessions/' + this.id;
        
    },

    initialize:function(){
        console.log("collection created from participants");

        
    }
    
});


  var meetingsobj= new Meetings();
  console.log(meetingsobj);
  return meetingsobj;

 });
