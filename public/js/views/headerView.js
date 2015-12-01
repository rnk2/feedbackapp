define(['jquery', 'backbone','templates','router'], function($, Backbone,Templates,BaseRouter) {
    
HomeView = Backbone.View.extend({
   template: Templates['header'],
    
    render: function () {
        console.log("from header view");
        // var template = $("#homeTemplate").html();
        // var html = Handlebars.compile(template);
        //console.log(this.HomeTemplates);
        //var template = Templates['home'];
        $(this.el).html(this.template);
        return this;
    }

});

return HomeView;
       
});
