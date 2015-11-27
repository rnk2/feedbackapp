define(['jquery', 'backbone',
    'signinBoard', 'signinsBoard'
], function($, Backbone, SigninModel, SigninCollection) {


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

            }
            $('.displayBoard').html(this.signinView.render().el);
        }




    });

    return feedapp;

});
