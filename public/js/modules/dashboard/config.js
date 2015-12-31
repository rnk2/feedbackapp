

define(['jquery', 'backbone','dashboardview','createSessionsView','sessionCollection','viewSessions','userSessions','sessionsDetails','headerView', 'footerView','appUser','mysessions','participants','mySessionsDetails'], function($, Backbone, DashboardView,SessionsView,SessionCollection,ViewSessions,UserSessions,SessionDetails,HeaderView, FooterView,AppUser,MySessions,Participants,MySessionsDetails) 
{

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
            'mysessiondetails/:id' : 'mySessions',
            'userSessions' : 'userSessions',
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


        mySessions : function(id){
            console.log("my sessions");
            var sessiondetails = new MySessionsDetails({
                  collection: {
                    sessions : new SessionCollection(),
                    participants : new Participants()
                     },
                    mid:id
                });
        },


        userSessions : function(){
            console.log("from user sessions");
            var usersessions = new MySessions({collection:UserSessions});
        },

        logout : function() {
            window.location.href = 'http://localhost:3000/logout'
        }

    });
    return AppRouter;
});


