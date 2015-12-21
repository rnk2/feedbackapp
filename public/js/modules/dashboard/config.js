

define(['jquery', 'backbone','dashboardView', 'headerView', 'footerView'], function($, Backbone, DashboardView, HeaderView, FooterView) 
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
            '': 'dashboard'
        },

        dashboard: function() {
            if (!this.dashboardView) {
                this.dashboardView = new DashboardView();
            }
            this.dashboardView.render();
        }
    });
    return AppRouter;
});
