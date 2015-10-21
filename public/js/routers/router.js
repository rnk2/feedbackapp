define(['jquery', 'backbone', 'modelBoard', 'collectionBoard','participant','participants','presenter','home', 'technologies','mailing','feedview','sessions', 'feedback', 'rating', 'register','signin', 'feedBoard', 'feedsBoard','registrationBoard','registrationsBoard','signinBoard','signinsBoard'], function($, Backbone, Mboard, BaseCollection,ParticipantsModel,ParticpantesCollection,PresenterView, HomeView, TechnologiesView,MailingView,FeedView,SessionsView, FeedbackView, RatingView, SignupView,SigninView, FeedModel, FeedCollection, RatingModel, RatingsCollection,RegisterModel,RegisterCollection,SigninModel, SigninCollection) {
    var feedapp = Backbone.Router.extend({



        routes: {
            '': 'home',
            'technologies': 'technologies',
            'sessions': 'sessions',
            'feedback': 'feedback',
            'signup': 'signup',
            'signin' :'signin',
            'ratingss/:id': 'ratings',
            'mailto':'mailto',
            'logout' : 'logout',
            'presenter' : 'presenter',
            'userfeedback/:id' : 'userfeedback'

        },

        home: function() {
            console.log("home page");
            console.log(HomeView);
            if (!this.homeView) {
                this.homeView = new HomeView();
            }
            $('.displayBoard').html(this.homeView.render().el);

        },

        presenter : function(){
            console.log("presenter page");
            console.log(PresenterView);
            if(!this.presenterView){
                this.presenterView = new PresenterView({collection : ParticpantesCollection}); 
            }
            $('.displayBoard').html(this.presenterView.render().el);
        },

        technologies: function() {
            console.log("technologies page");
            if (!this.technologiesView) {
                this.technologiesView = new TechnologiesView();
            }
            $('.displayBoard').html(this.technologiesView.render().el);
        },

        sessions: function() {
            console.log("admission page");
            if (!this.sessionsView) {
                this.sessionsView = new SessionsView({
                    collection: {
                        starrating: new RatingsCollection()
                    }

                });
            }
            $('.displayBoard').html(this.sessionsView.render().el);

        },

        feedback: function() {

            console.log('feedback page');
            if (!this.feedbackView) {
                this.feedbackView = new FeedbackView({
                    collection: BaseCollection
                });
                console.log('feedback router');
            }
            //this.feedbackView.render();
            $('.displayBoard').html(this.feedbackView.render().el);
        },

        signup: function() {

            console.log("signup page");
            if (!this.signupView) {
                this.signupView = new SignupView({collection : RegisterCollection});
            }
            $('.displayBoard').html(this.signupView.render().el);

        },

        signin : function() {
            console.log("singin");
            if(!this.signinView){
                this.signinView = new SigninView({collection : SigninCollection});

            }
            $('.displayBoard').html(this.signinView.render().el);
        },


        ratings: function(id) {
            console.log("rating page");
            // alert("router with target id");

            console.log(id);
            
                this.ratingView = new RatingView({collection:FeedCollection,mid : id});
               
            
            $('.displayBoard').html(this.ratingView.render().el);
        },

        logout : function() {
            window.location.href = 'http://localhost:3000/logout'
        },

        mailto : function(){
            console.log("sending mail");

            if(!this.mailView){
                this.mailView = new MailingView();

            }
            $('.displayBoard').html(this.mailView.render().el);

        },

        userfeedback : function(id){
            console.log("userfeedback");
            if(!this.feedView){
                this.feedView = new FeedView({collection:FeedCollection,mid : id});
            }

            $('.displayBoard').html(this.feedView.render().el);
        }

    });

    return feedapp;

});
