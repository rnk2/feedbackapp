define(['jquery', 'backbone', 'handlebars', 'router','participant','participants'], function($, Backbone,Hbs, BaseRouter,ParticipantModel,ParticipantsCollection) {

    var FeedbackView = Backbone.View.extend({
        id: '#container',
        className: 'home',

        events: {
            'click button#btnadd': 'addData',
            'click button#btnclear': 'clearInput'
            

        },

        initialize: function() {


            this.collection.on("add", this.addone, this);

        },

        render: function() {
            var self = this;

            var template = $("#presenterTemplate").html();
            var html = Handlebars.compile(template);
            $(this.el).html(html);
            this.delegateEvents();

            ParticipantsCollection.fetch({
                success: function(collection) {

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
            var meet = new ParticipantModel();
            
            // var id = $(e.currentTarget).data("id");
            meet.set('ssid', $("#ssid").val());
            meet.set('topic_name', $("#tname").val());
            meet.set('partc_name', $("#pname").val());
            meet.set('email', $("#pst_email").val());
            meet.save({
                wait: true
            }, {
                success: function(model, respose) {
                    console.log("success");

                    //console.log( this.collection.base);

                     ParticipantsCollection.add(model);
                },
                error: function() {
                    console.log("Something went wrong while saving the model");
                }


            });

        },


        clearInput: function() {
            
            //Clear all Textboxes 
            $("#tblinput input").val('');
        },


        addone: function(model) {

            var subview = new feedSub({
                model: model,
                collection: this.collection
            });
           
            $(this.el).find("#crud").append(subview.el);
            subview.delegateEvents();

        },

        addtwo : function(e){
            //e.preventDefault();
            alert("ratings button");
            var target=e.currentTarget.getAttribute('data-id');
            
            var rating=e.currentTarget.setAttribute('href',"ratingss/"+target);
            
            // $(".ratbtn").off('click');

        }





    });


    var feedSub = Backbone.View.extend({

        tagName: 'tr',

        initialize: function() {

            this.render();
        },
        render: function() {
            // console.log('in render');
            var template = $("#parts-template").html();

            var source = Handlebars.compile(template);
            var html = source(this.model.toJSON());

            $(this.el).html(html);

            return this;

        }
    });




    return FeedbackView;
});
