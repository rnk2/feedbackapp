define(['jquery', 'backbone', 'helpers',
    'templates/mySessionsList',
    'templates/session',
    'collections/sessions',
    "views/mySessionsRow"
], function($, Backbone, Helpers, mySessionsListTemp,
    sessionsSubTemplate, SessionsCollection, MySessionsRow) {

    var MySessionsListView = Backbone.View.extend({
        
        collection: new SessionsCollection(),
        initialize: function(options) {
            this.collection.url = options.currentRoute;
            this.render();            
        },
        template: mySessionsListTemp,
        el: "#section",
        render: function() {
            self = this;
            $(this.el).html(this.template());
            


            this.collection.fetch({
                success: function(collection) {
                    collection.each(function(model) {                        
                        model.set("closed", model.attributes.status == "closed" ? true : false);                        
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
            var sessionRow = new MySessionsRow({
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


    return MySessionsListView;

});