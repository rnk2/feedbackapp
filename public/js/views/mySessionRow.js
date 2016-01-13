 define(['jquery', 'backbone', 'templates/mySessionRow'],
    function($, Backbone, mySessionTemplate) {

        var SessionView = Backbone.View.extend({
            template: mySessionTemplate,
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