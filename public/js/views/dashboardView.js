define(['jquery', 'backbone','templates/dashboard'], function($, Backbone, dashboardTemp) {
    
var DashboardView = Backbone.View.extend({
   initialize :function(){
    this.render();
   },
   template: dashboardTemp,
   el : "#section",
  
  render: function () {
        $(this.el).html(this.template);
        return this;
    }
});

return DashboardView;
       
});
