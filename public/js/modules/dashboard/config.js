

define(['jquery', 'backbone','dashboardview','createSessionsView','sessionCollection','viewSessions','sessionsDetails','headerView', 'footerView','appUser','participants'], function($, Backbone, DashboardView,SessionsView,SessionCollection,ViewSessions,SessionDetails,HeaderView, FooterView,AppUser,Participants) 
{


  console.log(AppUser);
  

    function renderHeader(){
        new HeaderView({signedIn : true,username: AppUser.firstname, lastname : AppUser.lastname});
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
            var viewsessions = new ViewSessions({
                collection: {
                    sessions : new SessionCollection() }
                });
        },

        sessiondetails :function(id){
            console.log("specific sessions");
            console.log(id);
            var sessiondetails = new SessionDetails({
                  collection: {
                    sessions : new SessionCollection(),
                    participants : new Participants()
                     },
                    mid:id
                });
        },

        logout : function() {
            window.location.href = 'http://localhost:3000/logout'
        }

    });
    return AppRouter;
});


