define(['jquery', 'backbone', 'templates/forgotPassword'], function($, Backbone, forgotPasswordTemp) {

    ForgotPasswordView = Backbone.View.extend({
        initialize: function() {
            this.render();
        },
        template: forgotPasswordTemp,
        el: "#section",
        render: function() {
            $(this.el).html(this.template);
            return this;
        }
    });

    return ForgotPasswordView;

});