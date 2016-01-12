define(['backbone', 'views/home'], function(Backbone, HomeView) {

    /*Render header and footer*/
    require(["views/header", "views/footer"], function(HeaderView, FooterView) {
        new HeaderView();
        new FooterView();
    });

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'home'
        },

        home: function() {
            new HomeView();
        }
    });
    return AppRouter;
});