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
            'forgotpassword': "forgotpassword",
            "*default" : 'signin'
        },

        signin: function() {            
            var signinView = new SigninView();            
        },

        forgotpassword : function() {
            new ForgotPasswordView();
        }

    });

    return AppRouter;

});