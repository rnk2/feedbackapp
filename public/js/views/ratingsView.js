define(['jquery', 'backbone','templates/ratings','ratingModel','appUser','starRating'], function($, Backbone,ratingsTemp,RatingsModel,AppUser,StarRating) {
    
RatingsView = Backbone.View.extend({
   initialize :function(options){

   	this.collection.ratings.id = options.mid;


    this.render();
   },

    events: {
                    'keypress': 'keyAction',
                    "click #addRating": "addRating"
                },


   template: ratingsTemp,

   el : "#section",

  render: function () {
        $(this.el).html(this.template);
        return this;
    },

    keyAction: function(e) {
                    var code = e.keyCode || e.which;
                    if (code == 13) {
                        this.handleSignin();
                    }
                },

                addRating: function(e){
                	var self = this;
                    $("#input-id").rating({min:1, max:10, step:2, size:'lg'});
                	var url = Backbone.history.getFragment().split('/');
                    var timestamp = url[1]
                    console.log(timestamp);
                    var feed = new RatingsModel();
                    console.log(AppUser.firstname);
                    var participant = AppUser.firstname;
                   feed.set('participant',participant);
                   feed.set('ssid', timestamp);
                   feed.set('pscore', $("#pskills").val());
                   feed.set('tscore',$("#tskills").val());
                   feed.save({wait:true
                   }, {
                   	success: function(model, respose) {
                    console.log("success");

                    //console.log( this.collection.base);

                   
                },
                error: function() {
                    console.log("Something went wrong while saving the model");
                }
                   });

                    this.clearInput();

                   
                   
                },


                 clearInput: function() {
            //Clear all Textboxes 
            // $("#tblinput input").val('');
        }

});

return RatingsView;
       
});
