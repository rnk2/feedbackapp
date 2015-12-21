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
           
                var registerView = new RegisterView();
            
           
        }      
    });

    return AppRouter;

});
