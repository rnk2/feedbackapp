 define(['jquery', 'backbone', 'templates/session'],
    function($, Backbone, sessionTemplate) {

        var SessionView = Backbone.View.extend({
            template: sessionTemplate,
            tagName: 'tr',
            initialize: function() {                
                this.render();
            },
            render: function() {
                $(this.el).html(this.template(this.model.toJSON()));
                return this;
            }
        });

        return SessionView;

    });