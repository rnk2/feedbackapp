define(['jquery', 'backbone', 'helpers',
    'templates/sessionsList',
    'templates/session',
    'collections/sessions',
    "views/sessionRow"
], function($, Backbone, Helpers, sessionsListTemp,
    sessionsSubTemplate, SessionsCollection, SessionRow) {

    var SessionsListView = Backbone.View.extend({
        
        collection: new SessionsCollection(),
        initialize: function(options) {
            this.render();
            //this.collection.sessions.id = options.mid;

        },
        template: sessionsListTemp,
        el: "#section",
        render: function() {
            self = this;
            $(this.el).html(this.template());
            this.collection.fetch({
                success: function(collection) {
                    collection.each(function(model) {
                        self.renderSessionRow(model);
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
            console.log(model);
            var sessionRow = new SessionRow({
                model: model                
            });
            $(this.el).find("#currentSessions").append(sessionRow.el);
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