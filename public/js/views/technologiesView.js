define(['jquery', 'backbone','templates','router'], function($, Backbone,Templates,BaseRouter) {
    
TechView = Backbone.View.extend({
    template: Templates['technologies'],
    tagName: 'div',
    className: 'home',
   
    render: function () {
        console.log("from technologies view");
        
        $(this.el).html(this.template);
        return this;
    }

});

return TechView;
       
});
