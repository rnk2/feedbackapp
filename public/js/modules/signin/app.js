define(['jquery','backbone','configSignin'], function($,Backbone,BaseRouter) {
    var App = {};

    console.log(BaseRouter);
    // $(document).on('click', 'a:not([data-bypass])', function(e) {
    //     href = $(this).prop('href')
    //     console.log("user"+href);

    //     root = location.protocol + '//' + location.host + '/'
    //     if (root === href.slice(0, root.length)) {
    //         e.preventDefault();
    //         Backbone.history.navigate(href.slice(root.length), true);
    //     }
    // });


    App.start = function() {
        new BaseRouter();
     console.log("start user");

        Backbone.history.start({
            //pushState: true,
            //hashstate: false 
        });
     };
    return App;
});
