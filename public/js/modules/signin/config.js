define(['jquery', 'backbone', 'headerView', 'footerView', 'signinView', "forgotPasswordView"], function($, Backbone, HeaderView, FooterView, SigninView, ForgotPasswordView) {

    function renderHeader() {
        new HeaderView();
    }

    function renderFooter() {
        new FooterView();
    }

    renderHeader();
    renderFooter();

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'signin',
            'forgotpassword': "forgotpassword"
        },

        signin: function() {
            var signinView = new SigninView();
            // this.signinView.render();
        },

        forgotpassword : function() {
            new ForgotPasswordView();
        }

    });

    return AppRouter;

});