define(['jquery', 'backbone','templates/common/footer'], function($, Backbone,footerTemp) {
    
FooterView = Backbone.View.extend({
    initialize : function(){
        this.render();
    },
    template: footerTemp,
    el : "#footer",
    render: function () {
        $(this.el).html(this.template());
        return this;
    }
});

return FooterView;
       
});
