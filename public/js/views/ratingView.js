define(['jquery', 'backbone', 'handlebars', 'router', 'feedBoard', 'feedsBoard', 'chart'], function($, Backbone, Hbs, BaseRouter, FeedModel, FeedsCollection, charts) {

    var RatingView = Backbone.View.extend({

        id: '#container',
        className: 'home',

        events: {
            'click button#btnadd': 'addData'


        },


        initialize: function(options) {

            this.collection.on("add", this.addone, this);
            this.collection.id = options.mid;



            console.log("rating view");
            

        },

        render: function() {
            var self = this;

            var template = $("#rating-template").html();
            var html = Handlebars.compile(template);
            console.log(html);
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

            this.afterRender();


        },

        afterRender: function(model) {
            var names = [];
            var pskills = [];
            var tskills = [];
            console.log('afterRender');
            console.log(this.collection);
            this.collection.each(function(index) {

                       names.push(index.attributes.user);
                       pskills.push(index.attributes.pskills);
                       tskills.push(index.attributes.tskills);

                        // console.log(index.attributes);
                    }, this);
            console.log(names);
            var ctx;
            var randomScalingFactor = function() {
                return Math.round(Math.random() * 100)
            };

            var lineChartData = {
                labels: names,
                datasets: [{
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: pskills
                }, {
                    label: "My Second dataset",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data:tskills
                }]


            }
            ctx = document.getElementById("canvas").getContext("2d");
            window.myLine = new Chart(ctx).Line(lineChartData, {
                responsive: true
            });


            return this;
        }

        
        // afterRender : function(){
        //     alert("hi afterrender");
        // }
           





    });



    var rateSub = Backbone.View.extend({
        tagName: 'tr',
        initialize: function() {
            var template = $("#ratingfeed-template").html();
            var source = Handlebars.compile(template);
           
            var html = source(this.model.toJSON());

            console.log(html);

            $(this.el).html(html);
            return this;
        }
    });



    return RatingView;
});
