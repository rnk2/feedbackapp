

define(['jquery', 'backbone','dashboardview','sessions','headerView', 'footerView'], function($, Backbone, DashboardView,SessionsView,HeaderView, FooterView) 
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
            '': 'dashboard',
            'vsessions' : 'vsessions',
            'nsessions' : 'nsessions'
            
        },

        dashboard: function() {
            
                var dashboardView = new DashboardView();
        
           
        },

        nsessions: function(){
            console.log("view sessions");
            var sessionView = new SessionsView();
        },


        vsessions : function(){
            console.log("new sessions");
            var nsessions = new Nsessions();
        }
    });
    return AppRouter;
});
