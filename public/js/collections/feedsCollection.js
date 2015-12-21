define(['backbone','feed'], function(Backbone,FeedModel) {


    var FeedBack = Backbone.Collection.extend({
        model: FeedModel,
        url: function () {
            console.log(this.id);
        return '/ratings/' + this.id;
        
    },

        initialize: function() {
        	
            console.log("collection created from feed base");
           


        }

    });



    return FeedBack;

});
