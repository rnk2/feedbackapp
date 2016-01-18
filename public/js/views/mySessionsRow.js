 define(['jquery', 'backbone', 'templates/mySessionsRow'],
    function($, Backbone, mySessionTemplate) {

        var SessionView = Backbone.View.extend({
            template: mySessionTemplate,
            tagName: 'tr',
            initialize: function() {                
                this.render();
            },
            events : {
                "click .view-session-details" : "viewMySessionDetails"
            },

            viewMySessionDetails : function(){

                console.log(this.model);

            },
            render: function() {
                $(this.el).html(this.template(this.model.toJSON()));
                return this;
            }
        });

        return SessionView;

    });