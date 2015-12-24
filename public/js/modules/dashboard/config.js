

define(['jquery', 'backbone','dashboardview','createSessionsView','sessionCollection','viewSessions','sessionsDetails','headerView', 'footerView'], function($, Backbone, DashboardView,SessionsView,SessionCollection,ViewSessions,SessionDetails,HeaderView, FooterView) 
{

    function renderHeader(){
        new HeaderView({signedIn : true});
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
            'createsession' : 'createsession',
            'sessiondetails' : 'sessiondetails'
            
        },

        dashboard: function() {            
                var dashboardView = new DashboardView();            
        },

        createsession: function(){
            console.log("new sessions");
            var sessionView = new SessionsView();
        },

        viewsessions : function(){
            console.log("view sessions");
            var viewsessions = new ViewSessions({collection:SessionCollection});
        },

        sessiondetails :function(){
            console.log("specific sessions");
            var sessiondetails = new SessionDetails({});
        }
    });
    return AppRouter;
});
