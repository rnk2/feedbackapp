

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
            'sessiondetails/:id' : 'sessiondetails',
            'logout' : 'logout'
            
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

        sessiondetails :function(id){
            console.log("specific sessions");
            var sessiondetails = new SessionDetails({collection:SessionCollection,mid:id});
        },

        logout : function() {
            window.location.href = 'http://localhost:3000/logout'
        }

    });
    return AppRouter;
});
