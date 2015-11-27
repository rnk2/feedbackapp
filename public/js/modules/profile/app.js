define(['jquery','backbone','configProfile'], function($,Backbone,BaseRouter) {
    var App = {};
    // console.log(Backbone);
    console.log(BaseRouter);
    console.log("inside profile app");
    // $(document).on('click', 'a:not([data-bypass])', function(e) {
    //     href = $(this).prop('href')
    //     console.log("home"+href);


    //     root = location.protocol + '//' + location.host + '/'
    //     if (root === href.slice(0, root.length)) {
    //         e.preventDefault();
    //         Backbone.history.navigate(href.slice(root.length), true);
    //     }
    // });


    App.start = function() {
        new BaseRouter();
     console.log("Profile Page");

        Backbone.history.start({
            // pushState: false,
            // hashstate: false
        });
     };
    return App;
});




