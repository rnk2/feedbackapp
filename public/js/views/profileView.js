define(['jquery', 'backbone','templates','router'], function($, Backbone,Templates,BaseRouter) {
    
TechView = Backbone.View.extend({
    template: Templates['profile'],
    tagName: 'div',
    className: 'home',
   
    render: function () {
        console.log("from profile view");
        
        $(this.el).html(this.template);
        return this;
    }

});

return TechView;
       
});