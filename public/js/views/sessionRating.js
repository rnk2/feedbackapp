define(['jquery', 'backbone','templates/sessionChart','templates/sessionChartSub','appUser','chart'], function($, Backbone,sessionChartTemplate,sessionChartSubTemplate,AppUser,charts) {

    FeedbackView = Backbone.View.extend({
        

       

        initialize: function(options) {
            var collectionn;
          
            this.collection.ratings.on("add", this.addtwo, this);
            this.collection.sessions.id = options.mid;
            this.collection.ratings.id = options.mid;
            this.collection.id = options.mid;
            
            
            console.log(this.collection);
             this.render();

        },

        template: sessionChartTemplate,
        
        el : "#section",



        render: function() {
            var self = this;

           $(this.el).html(this.template());

             //sessions collection
            this.collection.sessions.fetch({
                success: function(collection) {
                    console.log(collection.id);
                    collection.each(function(index) {
                        // console.log(index);
                        // console.log(index.id);
                        if (index.id == collection.id) {
                            var title = index.attributes.pid;
                            var location = index.attributes.location;
                            var name = index.attributes.name;
                            var ssid = index.id;
                            document.getElementById("titlee").innerHTML = "<b>Session Name : </b>" + title;
                            $("#ssid").attr("value", ssid);
                            document.getElementById("location").innerHTML = "<b>Venue: </b>" + location;
                            $("#ssid").attr("value", ssid);
                            document.getElementById("presenter").innerHTML = "<b>Presenter Name : </b>" + name;
                            $("#ssid").attr("value", ssid);
                           
                        }

                    }, this);
                },
                error: function() {
                    console.log('something went wrong');
                }

            });
        
            
            this.collection.ratings.fetch({
                success: function(collection) {
                    collection.each(function(index) {
                        self.addtwo(index);
                        console.log(index);
                        
                    }, this);
                },
                error: function() {
                    console.log('something went wrong!');
                }
            });

            return this;
        },
         
         //adding new records/participants
        

        addtwo: function(model) {
            var ratingss = new prating({
                model: model,
                collection: this.collection
            });

            $(this.el).find("#crud").append(ratingss.el);
            

            this.afterRender();
        },

        

        afterRender: function(model) {
             console.log(model);
            
            var names = [];
            var pskills = [];
            var tskills = [];

            this.collection.ratings.each(function(index) {
                console.log("inside ratings");
                console.log("from ratings"+index);
                console.log(index.attributes.participant);
                names.push(index.attributes.participant);
                pskills.push(index.attributes.pscore);
                tskills.push(index.attributes.tscore);

                
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


    

    


    var prating = Backbone.View.extend({
        template: sessionChartSubTemplate,
        tagName: 'tr',
        initialize: function() {
           this.render();
            
        },

        render: function() {

            var source = this.template(this.model.toJSON());
             console.log(this.model.toJSON());
            $(this.el).html(source);
            return this;

        }
    });

    return FeedbackView;

});
