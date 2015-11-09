define(['jquery', 'backbone', 'handlebars', 'bootstrap', 'router', 'sessionsBoard', 'sessionBoard', 'feedBoard', 'feedsBoard', 'chart'], function($, Backbone, Hbs, Bootstrap, BaseRouter, SessionCollection, SessionModel, FeedModel, FeedCollection, charts) {

    SessionView = Backbone.View.extend({
        id: '#container',
        className: 'sessionid',

        events: {
            'click button#nusebtn': 'addData',
            'click .emailbtn': 'emailid'
        },

        initialize: function(options) {

            this.collection.partc.on("add", this.addone, this);
            this.collection.ratings.on("add", this.addtwo, this);

            this.collection.partc.id = options.mid;
            this.collection.ratings.id = options.mid;
            this.collection.sessions.id = options.mid;
            this.collection.id = options.mid;

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
                success: function(collection) {
                    collection.each(function(index) {
                        self.addtwo(index);
                        
                        var rstatus = index.attributes.status;
                        console.log(rstatus);
                        
                    }, this);
                },
                error: function() {
                    console.log('something went wrong!');
                }
            });

            this.collection.sessions.fetch({
                success: function(collection) {
                    console.log(collection.id);
                    collection.each(function(index) {
                        // self.addthree(index);
                        //console.log(index.id);
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

        addData: function(e) {
            //alert("adding new records");
            var url = Backbone.history.getFragment().split('/');
            var timestamp = url[1]
            console.log(timestamp);
            console.log("adding record");

            var meet = new SessionModel();
            var collection = this.collection.partc;
            // var id = $(e.currentTarget).data("id");
            meet.set('ssid', timestamp);

            meet.set('partc_name', $("#partc_name").val());
            meet.set('email', $("#email").val());
            meet.save({
                wait: true
            }, {
                success: function(model, respose) {
                    console.log("success");

                    //console.log( this.collection.base);

                    collection.add(model);
                },
                error: function() {
                    console.log("Something went wrong while saving the model");
                }


            });

            this.clearInput();

        },

        clearInput: function() {
            //Clear all Textboxes 
            $("#tblinput input").val('');
        },

        emailid: function(e) {
            
            var collection = this.collection.partc;
            
            this.collection.partc.fetch({
                success: function(collection) {

                    collection.each(function(index) {

                        //self.addone(index);
                        //console.log(index.attributes.email);
                        
                        to = index.attributes.email;
                        subject = "New Session"+index.attributes.ssid;
                        ssid = index.attributes.ssid;
                        $("#message").text("Sending E-mail...Please wait");
                        $.get("http://localhost:3000/send", {
                to: to,
                subject: subject,
                ssid: ssid
            }, function(data) {
                if (data == "sent") {
                    $("#message").empty().html("Email is sent participants Please check inbox!");
                }

            });


                    },this);
                },
                error: function() {

                    console.log('some thing went wrong!');

                }
            });
         this.removebutton();

        },

        removebutton : function(){
            
            $("#addrmv").hide(); 
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
        tagName: 'tr',
        initialize: function() {
            var template = $("#ratingfeed-template").html();
            var source = Handlebars.compile(template);
            var html = source(this.model.toJSON());

            $(this.el).html(html);
            return this;
        }
    });

    return SessionView;

});
