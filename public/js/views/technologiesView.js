define(['jquery', 'backbone','handlebars','router'], function($, Backbone,Hbs,BaseRouter) {
    
TechView = Backbone.View.extend({
    tagName: 'div',
    className: 'home',
    // template: _.template( $( '#aboutTemplate' ).html()),
    render: function () {
        console.log("from technologies view");
        var template = $("#technologiesTemplate").html();
        var html = Handlebars.compile(template);
        
        $(this.el).html(html);
        return this;
    }

});

return TechView;
       
});
