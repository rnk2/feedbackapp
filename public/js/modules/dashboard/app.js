define(['backbone','configDashboard'], function(Backbone, BaseRouter) {
    var App = {};
    App.start = function() {
        new BaseRouter();
        Backbone.history.start();
     };
    return App;
});

