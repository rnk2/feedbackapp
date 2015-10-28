define(['jquery', 'backbone', 'handlebars', 'router', 'sessionsBoard', 'sessionBoard','feedBoard','feedsBoard', 'chart'], function($, Backbone, Hbs, BaseRouter, SessionCollection, SessionModel,FeedModel,FeedCollection,charts) {

    SessionView = Backbone.View.extend({
         id: '#container',
        className: 'home',

        events: {
            'click button #nusebtn': 'addData'
        },

        initialize: function(options) {

            this.collection.partc.on("add", this.addone, this);
            this.collection.ratings.on("add",this.addtwo,this);
            this.collection.partc.id = options.mid;
            this.collection.ratings.id = options.mid;

        },

        render: function() {
            var self = this;
            
            var template = $("#sessionsTemplate").html();
            var html = Handlebars.compile(template);

            $(this.el).html(html);

            this.collection.partc.fetch({
                success: function(collection) {

                collection.each(function(index) {

                        self.addone(index);
                         
                        
                    }, this);
                },
                error: function() {

                    console.log('some thing went wrong!');

                }
            });

            this.collection.ratings.fetch({
                success:function(collection){
                    collection.each(function(index){
                        self.addtwo(index);
                        
                    },this);
                },
                error : function(){
                    console.log('something went wrong!');
                }
            });




            return this;
        },

        addData: function() {
            var newuser = new SessionModel();
            console.log("after adding bootstrap modal");
        },

        addone: function(model) {

            var participants = new rateSub({
                model: model,
                collection: this.collection
            });
            
            $(this.el).find("#feed").append(participants.el);
            this.titleName();
          
        },



        addtwo : function(model){
            var ratingss = new prating({
                model : model,
                collection : this.collection
            });
            $(this.el).find("#feeds").append(ratingss.el);
            
            this.afterRender();
        },

        titleName : function(model){
            //console.log("title");
            var ttx,title = [];

            this.collection.partc.each(function(index){
                title = index.attributes.topic_name;
                console.log(title);
                document.getElementById("titlee").innerHTML = "Session Name : " + title;
                
            },this);
        },
            

        afterRender : function(model){
            
            var names = [];
            var pskills = [];
            var tskills = [];
            
            this.collection.ratings.each(function(index) {

                       names.push(index.attributes.user);
                       pskills.push(index.attributes.pskills);
                       tskills.push(index.attributes.tskills);

                        // console.log(index.attributes);
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
                    data:tskills
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
        tagName: 'tr',
        initialize: function() {
            var template = $("#sessionfeed-template").html();
            var source = Handlebars.compile(template);

            var html = source(this.model.toJSON());

            $(this.el).html(html);
            return this;
        }
    });


    var prating = Backbone.View.extend({
        tagName : 'tr',
        initialize : function() {
            var template = $("#ratingfeed-template").html();
            var source = Handlebars.compile(template);
            var html = source(this.model.toJSON());
            
            $(this.el).html(html);
            return this;
        }
    });

    return SessionView;

});
