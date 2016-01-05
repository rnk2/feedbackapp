define(['jquery', 'backbone','templates','bootstrap','sessionsBoard', 'sessionBoard', 'feedBoard', 'feedsBoard', 'chart'], function($, Backbone,Templates,Bootstrap,SessionCollection, SessionModel, FeedModel, FeedCollection, charts) {

    SessionView = Backbone.View.extend({
        template: Templates['adminSessions'],
        id: '#container',
        className: 'sessionid',

       

        initialize: function(options) {
            var collectionn;
            this.collection.partc.on("add", this.addone, this);
            this.collection.ratings.on("add", this.addtwo, this);

            this.collection.partc.id = options.mid;
            this.collection.ratings.id = options.mid;
            this.collection.sessions.id = options.mid;
            this.collection.id = options.mid;
            console.log(this.collection);
            //collection = this.collection;

        },

        render: function() {
            var self = this;

            $(this.el).html(this.template);
        
            //ratings collection
            this.collection.ratings.fetch({
                success: function(collection) {
                    collection.each(function(index) {
                        self.addtwo(index);
                        //self.addthree(index);
                        // var rstatus = index.attributes.status;
                        // console.log(rstatus);
                        
                    }, this);
                },
                error: function() {
                    console.log('something went wrong!');
                }
            });
            
            //sessions collection
            this.collection.sessions.fetch({
                success: function(collection) {
                    console.log(collection.id);
                    collection.each(function(index) {
                        // self.addthree(index);
                        console.log(index.id);
                        if (index.id == collection.id) {
                            var title = index.attributes.tname;
                            var ssid = index.id;
                            document.getElementById("titlee").innerHTML = "Session Name : " + title;
                            $("#ssid").attr("value", ssid);
                        }



                    }, this);
                },
                error: function() {
                    console.log('something went wrong');
                }

            });




            return this;
        },
         
         //adding new records/participants
        

       
        
    },

        addone: function(model) {

            var participants = new rateSub({
                model: model,
                collection: this.collection
            });

            $(this.el).find("#feed").append(participants.el);


        },



        addtwo: function(model) {
            var ratingss = new prating({
                model: model,
                collection: this.collection
            });
            $(this.el).find("#feeds").append(ratingss.el);

            this.afterRender();
        },

        

        afterRender: function(model) {

            var names = [];
            var pskills = [];
            var tskills = [];

            this.collection.ratings.each(function(index) {
                console.log("inside ratings");
                names.push(index.attributes.user);
                pskills.push(index.attributes.pskills);
                tskills.push(index.attributes.tskills);

                console.log(index.attributes);
            }, this);

            var ctx;
            var randomScalingFactor = function() {
                return Math.round(Math.random() * 100)
            };
            var lineChartData = {
                labels: names,
                datasets: [{
                    label: "Presentation Skills",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: pskills
                }, {
                    label: "Technical Skills",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: tskills
                }]


            }
            ctx = document.getElementById("canvas").getContext("2d");
            window.myLine = new Chart(ctx).Line(lineChartData, {
                responsive: true,
                multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>"
            });

            return this;

        }





    });


    var rateSub = Backbone.View.extend({
        template: Templates['sessionsSub'],
        tagName: 'tr',
         
    
        initialize: function() {
            // var template = $("#sessionfeed-template").html();
            // var source = Handlebars.compile(template);
          
            var source = this.template(this.model.toJSON());
            //var source1 = this.template(this.model1.toJSON());
            console.log(source);
            //console.log(source1);
            $(this.el).html(source);

            return this;
        },


        
    });

    


    var prating = Backbone.View.extend({
        template: Templates['feedback'],
        tagName: 'tr',
        initialize: function() {
            // var template = $("#ratingfeed-template").html();
            // var source = Handlebars.compile(template);
            var source = this.template(this.model.toJSON());

            $(this.el).html(source);
            return this;
        }
    });

    return SessionView;

});
