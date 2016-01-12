define(['jquery', 'backbone','templates/home'], function($, Backbone,homeTemp) {
    
HomeView = Backbone.View.extend({
   initialize :function(){
    this.render();
   },
   template: homeTemp,
   el : "#section",
  render: function () {
        $(this.el).html(this.template);
        return this;
    }
});

return HomeView;
       
});
