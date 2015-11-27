define(['jquery','backbone','configAdminHome'], function($,Backbone,BaseRouter) {
    var App = {};

     console.log(Backbone);
    $(document).on('click', 'a:not([data-bypass])', function(e) {
        href = $(this).prop('href')
        console.log(href);

        root = location.protocol + '//' + location.host + '/'
        if (root === href.slice(0, root.length)) {
            e.preventDefault();
            Backbone.history.navigate(href.slice(root.length), true);
        }
    });


    App.start = function() {
        new BaseRouter();
     console.log("start feedback");

        Backbone.history.start({
            // pushState: true,
            //  hashstate: false 
        });
     };
    return App;
});
