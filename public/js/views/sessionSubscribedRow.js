 define(['jquery', 'backbone', 'templates/sessionSubscribedRow'],
     function($, Backbone, sessionSubscribedTemplate) {

         var SessionSubscribedView = Backbone.View.extend({
             template: sessionSubscribedTemplate,
             tagName: 'tr',
             initialize: function() {
                 this.render();
             },
             render: function() {
                 $(this.el).html(this.template(this.model.toJSON()));
                 return this;
             }
         });

         return SessionSubscribedView;

     });