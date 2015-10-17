define(['jquery', 'backbone', 'handlebars', 'router','feedBoard','feedsBoard'], function($, Backbone,Hbs, BaseRouter,FeedModel,FeedsCollection) {

    var RatingView = Backbone.View.extend({

        id: '#container',
        className: 'home',

        events: {
            'click button#btnadd': 'addData'
            },


        initialize: function(options) {
           
           this.collection.on("add", this.addone, this);
           this.collection.id = options.mid;
           //console.log(this.collection.graph.id);
           
           console.log("rating view");

        },

        render: function() {
            var self = this;

            var template = $("#rating-template").html();
            var html = Handlebars.compile(template);
            $(this.el).html(html);

            FeedsCollection.fetch({
                success: function(collection) {
                    //console.log('fetch success', this.collection.base.length);



                    collection.each(function(index) {

                        self.addone(index);

                       // console.log(index.attributes);
                    }, this);
                },
                error: function() {

                    console.log('some thing went wrong!');

                }
            });


            return this;
        },

        addData: function(e) {
            console.log("adding record");
                        var urating = new FeedModel();
            
            var id = $(e.currentTarget).data("id");
            urating.set('ssid', $("#ssid").val());
            urating.set('user', $("#uname").val());
            urating.set('email', $("#email").val());
            urating.set('pskills', $("#pskills").val());
            urating.set('tskills', $("#tskills").val());

            urating.save({
                wait: true
            }, {
                success: function(model, respose) {
                    console.log("success");
                    
                    //console.log( this.collection.base);

                     FeedsCollection.add(model);
                },
                error: function() {

                    console.log("Something went wrong while saving the model");
                }


            });

        },


        addone: function(model) {

            var rateview = new rateSub({
                model: model,
                collection: this.collection
            });
            //console.log(this.el);
            $(this.el).find("#feed").append(rateview.el);



        }



    });



    var rateSub = Backbone.View.extend({
        tagName: 'tr',
        initialize: function() {
            var template = $("#ratingfeed-template").html();
            var source = Handlebars.compile(template);

            var html = source(this.model.toJSON());
            
            $(this.el).html(html);
            return this;
        }
    });

    return RatingView;
});
