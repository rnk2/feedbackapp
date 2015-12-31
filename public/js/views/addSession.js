define(['jquery', 'backbone','bootstrap','datepicker', 'dateformat','templates/addSessions','templates/sessionconfirmation','sessionModel','appUser'], function($, Backbone,Bootstrap,DatePicker,Dateformat,sessionTemplate,sessionconfirmationTemp,SessionModel,AppUser) {

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
                    
                    var self = this;
                    var meet = new SessionModel();
                    console.log(AppUser.firstname);
                    var presentername = AppUser.firstname;
                   meet.set('presentername',presentername);
                   meet.set('topicname', $("#topicname").val());
                   meet.set('location',$("#location").val());
                   meet.set('pst_date', $("#pst_date").val());
                   meet.set('description',$("#description").val());

                   meet.save({
                wait: true
            }, {
                success: function(model, response) {

                    console.log(response);
                    $(self.el).html(sessionconfirmationTemp({topicname : "session successfully added"}));
                    // if(response.errorMessage){
                    //     self.handleErrors(response.errorMessage);
                    //     return;
                    // }

                    //  if(response.topicname){     

                    //     alert("success");

                    //  //    var records=JSON.stringify(user);
                    //  // console.log(records.pid);                   
                    //  //    $(self.el).html(confirmationTemp({topicname : response.topicname}));
                    // }
                    // else{                        
                    // }
                 },
                error: function() {
                    console.log("Something went wrong while saving the model");
                    $(self.el).html(sessionconfirmationTemp({topicname : "something went wrong"}));
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
