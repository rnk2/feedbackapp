define(['jquery', 'backbone', 'views/signin'], function($, Backbone, SigninView) {

    /*Render header and footer*/
    require(["views/header", "views/footer"], function(HeaderView, FooterView) {
        new HeaderView();
        new FooterView();
    });

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
              require(["views/forgotPassword"], function(ForgotPasswordView) {                    
                   new ForgotPasswordView();                   
                });
        }

    });

    return AppRouter;

});