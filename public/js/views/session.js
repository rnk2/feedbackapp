define(['jquery', 'backbone', 'templates/session',
        'templates/sessionDetailsSub', 'appUser', 'collections/participants','models/subscription',
        'views/participantRow', 'templates/overlays/feedback'
    ],
    function($, Backbone, sessionTemplate, sessionDetailsSubTemplate, appUser,
     ParticipantsCollection, SubscriptionModel, ParticipantRowView, feedbackOverlayTemplate) {

        var SessionDetailsView = Backbone.View.extend({

            initialize: function(options) {
                
                this.render();
                
                                  
                
            },


            events: {
                "click #subscribe": "handleSessionSubscription",
                "click #unsubscribe": "handleSessionUnsubscription",
                "click #updateFeedback": "handleUpdateFeedback"
            },


            template: sessionTemplate,

            el: "#section",

            handleRerender : function(){                
                var self =this;
                $(this.el).html(this.template(this.model.toJSON()));

                this.model.fetch({
                    success : function(model){                        
                        self.participantsCollection.reset(self.model.attributes.participants);
                        self.participantsCollection.each(function(model, index) {
                            model.attributes.index = index + 1;
                            self.renderParticipantRow(model);
                        });
                    }
                })
            },

            render: function() {
              
                var self = this;                
                $(this.el).html(this.template(this.model.toJSON()));
                self.participantsCollection = new ParticipantsCollection(this.model.attributes.participants);

                self.participantsCollection.each(function(model, index) {
                    model.attributes.index = index + 1;
                    self.renderParticipantRow(model);
                });
            },

            renderParticipantRow: function(model) {
                var participantRowView = new ParticipantRowView({
                    model: model
                });
                $(this.el).find("#sessionParticipants").append(participantRowView.el);
            },

            handleSessionSubscription: function(e) {                

                e.preventDefault();
                var self = this;
                var subscription = new SubscriptionModel({
                    currentRoute : "/sessionSubscription"
                });

              
                var answer = confirm("Are you sure ?");
                
                if(answer){
                    subscription.set('userId', appUser.id);
                    subscription.set('sessionId', self.model.attributes.id);                

                    subscription.save({wait : true},{
                        success: function(model, response) {
                           self.model.set("subscribed" , true);
                           self.handleRerender();
                        },
                        error: function() {
                           
                        }
                    });
                }
                
            },

            handleSessionUnsubscription: function() {
                alert("ji");
            },

            handleUpdateFeedback : function(){

              $("#modalWrapper").html(feedbackOverlayTemplate());
              $("#feedbackCtrl").modal("show");
            },

            addTwo: function(model) {

                var singlerecord = new participantSub({
                    model: model,
                    collection: this.collection
                });

                $(this.el).find("#crud").append(singlerecord.el);


            },





            handleErrors: function(error) {
                $(this.el).find(".error-status").html(error).show();
            },

            clearErrors: function() {
                $(this.el).find(".error-status").empty().hide();
            },


            addParticipants: function(e) {

                var url = Backbone.history.getFragment().split('/');
                var timestamp = url[1];
                console.log(timestamp);
                var username = AppUser.firstname;
                var email = AppUser.email;

                var collection = this.collection.participants;

                console.log(collection);

                var participant = new Participant();
                var that = this;

                participant.set('participant', username);
                participant.set('email', email);
                participant.set('ssid', timestamp);



                participant.save({
                    wait: true
                }, {
                    success: function(model, response) {

                        console.log(response);
                        that.undelegateEvents();

                        // $(self.el).html(sessionconfirmationTemp({topicname : "session successfully added"}));
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
                        collection.add(model);
                    },
                    error: function() {
                        console.log("Something went wrong while saving the model");
                        // $(self.el).html(sessionconfirmationTemp({topicname : "something went wrong"}));

                    }


                });
            },


            deleteParticipants: function(e) {
                var that = this;
                var collection = this.collection.participants;
                var ssidd = collection.id;
                var email = AppUser.email;
                console.log(collection.id);
                console.log(collection);
                console.log(AppUser.email);

                collection.each(function(model) {
                    console.log(model.attributes.ssid);
                    console.log(ssidd);
                    if (model.attributes.ssid === parseInt(ssidd)) {
                        if (email == model.attributes.email) {
                            model.destroy({
                                success: function() {
                                    console.log("success");

                                    //             // $(e.target).closest("tr").remove();
                                    //             //studentCollection.remove();
                                    that.undelegateEvents();
                                },
                                error: function() {
                                    console.log("here");
                                }
                            });

                        } else {
                            console.log("something went wrong");
                        }

                    }
                });
                // this.model.destroy({
                //         success:function(){
                //             console.log("success");
                //             // $(e.target).closest("tr").remove();
                //             //studentCollection.remove();
                //          that.undelegateEvents();
                //         },
                //         error:function(){
                //             console.log("here");
                //         }
                //     });
            }





        });


        // var participantSub = Backbone.View.extend({
        //       template: sessionDetailsSubTemplate,
        //       tagName: 'tr',


        //       initialize: function() {
        //           this.render();
        //       },


        //      render: function() {

        //           var source = this.template(this.model.toJSON());
        //           console.log(this.model.toJSON());
        //           $(this.el).html(source);

        //           return this;

        //       }





        //   });



        return SessionDetailsView;

    });