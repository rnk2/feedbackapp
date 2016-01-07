define(['jquery', 'backbone', 'bootstrap', 'datepicker', 'dateformat',
        'templates/createSessionForm', 'templates/sessionconfirmation', 'sessionModel', 'appUser',
        'collections/locations'
    ],
    function($, Backbone, Bootstrap, DatePicker, Dateformat, createSessionFormTemp, sessionconfirmationTemp,
        SessionModel, appUser, LocationsCollection) {

        var SessionView = Backbone.View.extend({

            initialize: function(options) {
                var self = this;
                var locationsCollection = new LocationsCollection();
                console.log(locationsCollection.fetch({
                    success : function(collection, resp){                        
                    $(self.el).html(self.template({
                        locations : resp
                    }));
                    $('#datetimepicker1').datetimepicker();
                    }
                }));

                self.render();
            },

            template: createSessionFormTemp,

            el: "#section",

            events: {
                'keypress': 'handleEnterBtnSubmit',
                "click #addSession": "handleCreateSession"
            },
            render: function() {
                $(this.el).html(this.template);
                $('#datetimepicker1').datetimepicker();
                return this;
            },

            handleEnterBtnSubmit: function(e) {
                var code = e.keyCode || e.which;
                if (code == 13) {
                    this.handleSignin();
                }
            },

            //adding new records/participants
            handleCreateSession: function(e) {
                e.preventDefault();
                var self = this;
                var session = new SessionModel();

                session.set('title', $("#sessionTitle").val());
                session.set('presenterId', appUser.id);
                session.set('locationId', Number($("#sessionLocation").val()));
                session.set('description', $("#description").val());
                session.set('date', $("#sessionDate").val());

                session.save({
                    wait: true
                }, {
                    success: function(model, response) {

                        $(self.el).html(sessionconfirmationTemp({
                            topicname: "session successfully added"
                        }));
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
                        $(self.el).html(sessionconfirmationTemp({
                            topicname: "something went wrong"
                        }));
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