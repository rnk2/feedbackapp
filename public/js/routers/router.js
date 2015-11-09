define(['jquery', 'backbone',
    'modelBoard', 'collectionBoard',
    'userSession', 'userSessions',
    'user','mailers','mailer',
    'sessionBoard',
    'sessionsBoard','participant',
    'participants',
    'home', 'technologies',
    'feedview','sessions', 
    'feedback', 'rating',
    'register','signin', 
    'feedBoard', 'feedsBoard',
    'registrationBoard','registrationsBoard',
    'signinBoard','signinsBoard'
    ], function($,Backbone,
        Mboard,BaseCollection,
        UserModel,UserCollection,
        UserView,MailingCollection,
        MailModel,SessionModel,
        SessionCollection,ParticipantsModel,
        ParticpantesCollection,
        HomeView, TechnologiesView,
        FeedView,SessionsView, 
        FeedbackView, RatingView,
        SignupView,SigninView, 
        FeedModel, FeedCollection,
         RatingModel, RatingsCollection,
         RegisterModel,RegisterCollection,
         SigninModel, SigninCollection
         ) {
    var feedapp = Backbone.Router.extend({



        routes: {
            '': 'home',
            'Requests': 'Requests',
            'sessionss/:id': 'sessions',
            'feedback': 'feedback',
            'signup': 'signup',
            'signinn' :'signin',
            'ratingss/:id': 'ratings',
            'mailto/:id':'mailto',
            'logout' : 'logout',
            'userfeedback/:id' : 'userfeedback',
            'user/:uname' : 'user'

        },

        home: function() {
            console.log("home page");
            console.log(HomeView);
            if (!this.homeView) {
                this.homeView = new HomeView();
            }
            $('.displayBoard').html(this.homeView.render().el);

        },

        user: function(uname) {
            console.log(uname);
           
            //console.log(new BaseCollection());
            if (!this.userView) {
                this.userView = new UserView({collection: UserCollection,mid : uname});
            }
            $('.displayBoard').html(this.userView.render().el);

        },

        Requests: function() {
            console.log("technologies page");
            if (!this.technologiesView) {
                this.technologiesView = new TechnologiesView();
            }
            $('.displayBoard').html(this.technologiesView.render().el);
        },

        sessions: function(id) {
            
            
                this.sessionsView = new SessionsView({
                    collection : {
                        partc : new SessionCollection(),
                        ratings : new FeedCollection(),
                        sessions : new BaseCollection()
                    },
                    mid : id
                });
            
            $('.displayBoard').html(this.sessionsView.render().el);

        },

        feedback: function() {

            console.log('feedback page');
            //console.log(new BaseCollection());
                this.feedbackView = new FeedbackView({
                    collection: {
                        records: new BaseCollection() }
                });
                console.log('feedback router');
            
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
            console.log("singin........");
            if(!this.signinView){
                this.signinView = new SigninView({collection : SigninCollection});

            }
            $('.displayBoard').html(this.signinView.render().el);
        },


        ratings: function(id) {
            console.log("rating page");
            console.log(id);

            console.log(id);
            
                this.ratingView = new RatingView({collection:FeedCollection,mid : id});
               
            
            $('.displayBoard').html(this.ratingView.render().el);
        },

        logout : function() {
            window.location.href = 'http://localhost:3000/logout'
        },

        mailto : function(id){
            console.log("sending mail");

            if(!this.mailView){
                this.mailView = new MailingView({collection:MailingCollection,mid : id});

            }
            $('.displayBoard').html(this.mailView.render().el);

        },

        userfeedback : function(id){
            console.log("userfeedback");
            console.log(id);
            if(!this.feedView){
                this.feedView = new FeedView({collection:FeedCollection,mid : id});
            }

            $('.displayBoard').html(this.feedView.render().el);
        }

    });

    return feedapp;

});
