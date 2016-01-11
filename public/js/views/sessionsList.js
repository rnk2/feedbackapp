define(['jquery', 'backbone', 'helpers',
    'templates/sessionsList',
    'templates/session',
    'collections/sessions',
    "views/session"
], function($, Backbone, Helpers, sessionsListTemp,
    sessionsSubTemplate, SessionsCollection, SessionView) {

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
                    
                    console.log(collection);

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
            var sessionView = new SessionView({
                model: model                
            });
            $(this.el).find("#currentSessions").append(sessionView.el);
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