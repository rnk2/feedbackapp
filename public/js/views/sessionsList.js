define(['jquery', 'backbone', 'helpers',
    'templates/sessionsList',
    'templates/session',
    'collections/sessions',
    "views/sessionRow",
    "views/sessionSubscribedRow"
], function($, Backbone, Helpers, sessionsListTemp,
    sessionsSubTemplate, SessionsCollection, SessionRow, SessionSubscribedRow) {

    var SessionsListView = Backbone.View.extend({

        collection: new SessionsCollection(),
        initialize: function(options) {
            this.collection.url = options.currentRoute;
            this.render();
        },
        template: sessionsListTemp,
        el: "#section",
        render: function() {
            self = this;
            $(this.el).html(this.template());



            this.collection.fetch({
                success: function(collection) {
                    collection.each(function(model) {
                        model.set("closed", model.attributes.status == "closed" ? true : false);
                        self.renderSessionRow(model);
                        if (model.attributes.subscribed)
                            self.renderSubscribedSessionRow(model);
                    }, this);
                },
                error: function(err1, err) {
                    console.log(err);
                    console.log('some thing went wrong!');
                }
            });
            return this;
        },

        renderSessionRow: function(model) {
            var sessionRow = new SessionRow({
                model: model
            });
            $(this.el).find("#currentSessions").append(sessionRow.el);
        },

        renderSubscribedSessionRow: function(model) {
            var sessionSubscribedRow = new SessionSubscribedRow({
                model: model
            });
            $(this.el).find("#subscribedSessions").append(sessionSubscribedRow.el);
        },

        handleErrors: function(error) {
            $(this.el).find(".error-status").html(error).show();
        },

        clearErrors: function() {
            $(this.el).find(".error-status").empty().hide();
        }
    });


    return SessionsListView;

});