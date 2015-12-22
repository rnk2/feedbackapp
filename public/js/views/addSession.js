define(['jquery', 'backbone', 'templates/addSessions'], function($, Backbone, sessionTemplate) {

            var SessionView = Backbone.View.extend({

               

               

                initialize: function(options) {
                    this.render();

                 

                },


                template: sessionTemplate,

                el: "#section",


                 events: {
                    'keypress': 'keyAction',
                    "click #addSession": "addSession"
                },



                render: function() {
                    

                    $(this.el).html(this.template);
                    console.log(this.template);
                    return this;
                },



                keyAction: function(e) {
                    var code = e.keyCode || e.which;
                    if (code == 13) {
                        this.handleSignin();
                    }
                },



                //adding new records/participants
                addSession: function(e) {
                    alert("adding new records");




                    this.clearInput();

                },

                clearInput: function() {
                    //Clear all Textboxes 
                    $("#tblinput input").val('');
                }


                    

            });

return SessionView;

});
