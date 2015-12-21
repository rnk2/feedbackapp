define(['jquery', 'backbone','templates/common/header'], function($, Backbone,headerTemp) {
    
HomeView = Backbone.View.extend({
    initialize : function(){
        this.render();
    },
    template: headerTemp,
    el : "#header",
    render: function () {
        $(this.el).html(this.template());
        return this;
    }
});

return HomeView;
       
});
