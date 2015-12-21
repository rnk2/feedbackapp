define(['jquery', 'backbone', "registerView", 'headerView', 'footerView'], function($, Backbone, RegisterView, HeaderView, FooterView) {
   
    
    function renderHeader(){
        new HeaderView();
    }

    function renderFooter(){
        new FooterView();
    }

    renderHeader();
    renderFooter();


    var AppRouter = Backbone.Router.extend({

        routes: {
            '': 'signup'
        },

        signup: function() {
            if (!this.signupView) {
                this.registerView = new RegisterView();
            }
            this.registerView.render();
        }      
    });

    return AppRouter;

});
