define(['jquery', 'backbone',
    'signinBoard', 'signinsBoard','header'
], function($, Backbone, SigninModel, SigninCollection,HeaderView) {


    var feedapp = Backbone.Router.extend({



        routes: {
            '': 'signin',
            'statusnull-nosession': 'statusnull'


        },

        statusnull: function() {
            console.log("no sessions");

        },

        signin: function() {

            console.log("singin........");
            if (!this.signinView) {
                this.signinView = new SigninView({
                    collection: SigninCollection
                });
                this.headerView = new HeaderView();

            }
            $('.displayBoard').html(this.signinView.render().el);
            $('.headerBoard').html(this.headerView.render().el);
        }




    });

    return feedapp;

});
