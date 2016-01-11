define(['backbone','configHome','bootstrap'], function(Backbone, BaseRouter) {
    var App = {};
    App.start = function() {
        new BaseRouter();
        Backbone.history.start();
     };
    return App;
});

