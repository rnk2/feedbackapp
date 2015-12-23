

define(['jquery', 'backbone','dashboardview','sessions','sessionCollection','viewSessions','headerView', 'footerView'], function($, Backbone, DashboardView,SessionsView,SessionCollection,ViewSessions,HeaderView, FooterView) 
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
            'viewsessions' : 'viewsessions',
            'newsessions' : 'newsessions'
            
        },

        dashboard: function() {
            
                var dashboardView = new DashboardView();
        
           
        },

        newsessions: function(){
            console.log("view sessions");
            var sessionView = new SessionsView();
        },


        viewsessions : function(){
            console.log("new sessions");
            var viewsessions = new ViewSessions({collection:SessionCollection});
        }
    });
    return AppRouter;
});
