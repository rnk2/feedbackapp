define(['jquery', 'backbone', 'handlebars', 'router', 'feedBoard','feedsBoard'], function($, Backbone,Hbs, BaseRouter,FeedModel,FeedsCollection) {

    var FeedView = Backbone.View.extend({

        id: '#container',
        className: 'home',

        events: {
            'click button#btnadd': 'addData'
            },


        initialize: function(options) {
           
           // this.collection.on("add", this.addone, this);
           this.collection.id = options.mid;
           //console.log(this.collection.graph.id);
           
           console.log("feedview");

        },

        render: function() {
            var self = this;
            //window.location.href = "http://localhost:3000/userfeedback/101"
            var template = $("#feeds-template").html();
            var html = Handlebars.compile(template);
            $(this.el).html(html);

            


            return this;
        },

        addData: function(e) {
            var url = Backbone.history.getFragment().split('/');            
            var timestamp = url[1]
            console.log(timestamp);
            console.log("adding record");
                        var urating = new FeedModel();
            
            var id = $(e.currentTarget).data("id");
            urating.set('ssid', $("#ssid").val());
            urating.set('user', $("#uname").val());
            urating.set('email', $("#email").val());
            urating.set('pskills', $("#pskills").val());
            urating.set('tskills', $("#tskills").val());
            urating.set('timestamp',timestamp);
            urating.set('userStatus',1);

            urating.save({
                wait: true
            }, {
                success: function(model, respose) {
                    console.log("success");
                    
                    var greetings = document.getElementById("thanks");
                   
                    greetings.innerHTML="<b>Thanks for your valuable feedback !!!!!!!!!</b>";

                     FeedsCollection.add(model);
                },
                error: function() {

                    console.log("Something went wrong while saving the model");

                    var invalideuser = document.getElementById("thanks");
                    invalideuser.innerHTML = "<b> Your are not valid user to submit feedback !!!!!</b>";

                }


            });

        },


       



    });



    
    return FeedView;
});
