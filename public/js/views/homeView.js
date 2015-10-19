define(['jquery', 'backbone','handlebars','router'], function($, Backbone,Hbs,BaseRouter) {
    
HomeView = Backbone.View.extend({
    tagName: 'div',
    className: 'home',
    // template: _.template( $( '#aboutTemplate' ).html()),
    render: function () {
        console.log("from home view");
        var template = $("#homeTemplate").html();
        var html = Handlebars.compile(template);
        
        $(this.el).html(html);
        return this;
    }

});

return HomeView;
       
});