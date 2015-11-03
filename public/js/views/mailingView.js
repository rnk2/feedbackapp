define(['jquery', 'backbone', 'handlebars', 'router', 'mailers', 'mailer'], function($, Backbone, Hbs, BaseRouter, MailingCollection, MailingModel) {

    var mailView = Backbone.View.extend({
        id: '#container',
        className: 'home',
        events: {
            'click button#send_email': 'sendData',
            'click button#email' : 'addEmail'


        },

        initialize: function(options) {


            this.collection.on("add", this.addone, this);
            this.collection.id = options.mid;

        },
        render: function() {
            var self = this;
            console.log("from mail view");
            var template = $("#mailingTemplate").html();
            var html = Handlebars.compile(template);

            $(this.el).html(html);
             this.delegateEvents();

            MailingCollection.fetch({
                success: function(collection) {




                    collection.each(function(index) {

                        self.addone(index);

                        console.log(index.attributes);
                    }, this);
                },
                error: function() {

                    console.log('some thing went wrong!');

                }
            });


            return this;
        },

        addone: function(model) {
            
            var subview = new feedSub({
                model: model,
                collection: this.collection
            });

            $(this.el).find("#crud").append(subview.el);
            subview.delegateEvents();

        },

        addEmail : function(){
            alert("hello");

        },


        sendData: function(e) {
            
            var url = Backbone.history.getFragment().split('/');            
            var timestamp = url[1]
            console.log(timestamp);
            to = $("#to").val();
            subject = $("#subject").val();
            

            ssid = timestamp;
            $("#message").text("Sending E-mail...Please wait");
            $.get("http://localhost:3000/send", {
                to: to,
                subject: subject,
                ssid: ssid
            }, function(data) {
                if (data == "sent") {
                    $("#message").empty().html("Email is been sent at " + to + ".Please check inbox!");
                }

            });
        }

    });

    var feedSub = Backbone.View.extend({

        tagName: 'tr',

        initialize: function() {

            this.render();
        },
        render: function() {
            // console.log('in render');
            var template = $("#mail-template").html();

            var source = Handlebars.compile(template);
            var html = source(this.model.toJSON());
            console.log(html);
            $(this.el).html(html);

            return this;

        }
    });

    return mailView;

});
