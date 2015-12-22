define(['jquery', 'backbone','bootstrap','datepicker', 'dateformat','templates/addSessions','sessionModel'], function($, Backbone,Bootstrap,DatePicker,Dateformat,sessionTemplate,SessionModel) {

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

                    $('#datetimepicker1').datetimepicker();
                    
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

                    var meet = new SessionModel();
                   meet.set('presentername', $("#presentername").val());
                   meet.set('topicname', $("#topicname").val());
                   meet.set('location',$("#location").val());
                   meet.set('pst_date', $("#pst_date").val());

                   meet.save({
                wait: true
            }, {
                success: function(model, response) {
                    console.log("success");
                    console.log("from  add sessions"+response);
                    // UserSessions.add(model);
                 },
                error: function() {
                    console.log("Something went wrong while saving the model");
                }


            });



                    this.clearInput();

                },

                clearInput: function() {
                    //Clear all Textboxes 
                    $("#tblinput input").val('');
                }


                    

            });

return SessionView;

});
