define(['jquery', 'backbone','handlebars','router'], function($, Backbone,Hbs,BaseRouter) {
    
PresenterView = Backbone.View.extend({
    tagName: 'div',
    className: 'home',
    // template: _.template( $( '#aboutTemplate' ).html()),
    render: function () {
        console.log("from technologies view");
        var template = $("#presenterTemplate").html();
        var html = Handlebars.compile(template);
        
        $(this.el).html(html);
        return this;
    }

});

return PresenterView;
       
});
