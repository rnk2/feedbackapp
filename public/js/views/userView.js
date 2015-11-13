define(['jquery', 'backbone', 'templates', 'datepicker', 'router', 'userSession', 'userSessions', 'dateformat'], function($, Backbone, Templates, DatePicker, BaseRouter, UserModel, UserSessions, Dateformat) {

    UserView = Backbone.View.extend({

        template: Templates['userView'],
        id: '#container',

        events: {
            'click button#btnadd': 'addData',
            'click button#btnclear': 'clearInput'


        },




        initialize: function(options) {

            console.log(this.collection);
            this.collection.on("add", this.addone, this);
            this.collection.uname = options.mid;

        },

        render: function() {
            var self = this;


            $(this.el).html(this.template);
            this.delegateEvents();

            UserSessions.fetch({
                success: function(collection) {
                    // console.log(collection.uname);
                    document.getElementById("presenter").innerHTML = "Name : " + collection.uname;
                    $('#datetimepicker1').datetimepicker();
                    collection.each(function(index) {

                        self.addone(index);
                    }, this);
                },
                error: function() {

                    console.log('some thing went wrong!');

                }
            });


            return this;
        },


        addData: function(e) {
            var url = Backbone.history.getFragment().split('/');
            var timestamp = url[1]
            console.log(timestamp);
            console.log("adding record");
            var dt = document.getElementById('pst_date').value;
            console.log(dt);
            var meet = new UserModel();
            var id = $(e.currentTarget).data("id");
            meet.set('tname', $("#tname").val());
            meet.set('pname', timestamp);
            meet.set('pst_date', $("#pst_date").val());

            meet.set('partcp', $("#attended").val());
            meet.save({
                wait: true
            }, {
                success: function(model, respose) {
                    console.log("success");
                    UserSessions.add(model);
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

        addone: function(model) {

            var subview = new feedSub({
                model: model,
                collection: this.collection
            });

            $(this.el).find("#crud").append(subview.el);
            subview.delegateEvents();

        }





    });


    var feedSub = Backbone.View.extend({

        template: Templates['userSub'],

        tagName: 'tr',
        initialize: function() {
            this.render();
        },

        render: function() {

            var source = this.template(this.model.toJSON());

            $(this.el).html(source);

            return this;

        }


    });









    return UserView;

});
