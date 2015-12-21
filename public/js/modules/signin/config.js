define(['jquery', 'backbone','headerView', 'footerView','signinView'], function($, Backbone,HeaderView, FooterView, SigninView) {

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
            '': 'signin',
            'statusnull-nosession': 'statusnull'
        },
        statusnull: function() {
            console.log("no sessions");
        },
        signin: function() {            
            if (!this.signinView) {
                this.signinView = new SigninView();
            }
            this.signinView.render();
        }

    });

    return AppRouter;

});
