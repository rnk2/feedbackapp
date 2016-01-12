define(['jquery', 'backbone', 'templates/participantRow'],
 function($, Backbone, partipantRowTemplate) {

     var PartipantRowView = Backbone.View.extend({
         template: partipantRowTemplate,
         tagName: 'tr',
         initialize: function() {
             this.render();
         },
         render: function() {
             $(this.el).html(this.template(this.model.toJSON()));
             return this;
         }
     });

     return PartipantRowView;

 });