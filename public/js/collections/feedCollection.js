define(['jquery','backbone','router','feedBoard'], function($,Backbone,BaseRouter,FeedModel) {



    var FeedBack = Backbone.Collection.extend({
        model: FeedModel,
        url: function () {
        return '/ratings/' + this.id;
        
    },

        initialize: function() {
        	
            console.log("collection created from feed base");
           


        }

    });


var feedsobj= new FeedBack();
    console.log(feedsobj);
    return feedsobj;

});
