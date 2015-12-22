

define(['jquery', 'backbone','homeView','headerView', 'footerView'], function($,Backbone,HomeView,HeaderView, FooterView) 
{


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
            '': 'home',
            
        },

        home: function() {
            if (!this.homeView) {
                this.homeView = new HomeView();
            }
            this.homeView.render();
        },

        userfeedback : function(id){
            
        }
    });
    return AppRouter;
});
