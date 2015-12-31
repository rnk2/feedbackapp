define(['jquery', 'backbone','templates/mySessionsDetails','templates/sessionDetailsSub','appUser','participant'], function($, Backbone,sessionDetailsTemplate,sessionDetailsSubTemplate,AppUser,Participant) {
  
    var SessionDetails = Backbone.View.extend({


         events: {
                    
                    "click #addParticipants": "addParticipants",
                    "click #deleteParticipants": "deleteParticipants"
                },
        
       
        initialize : function(options){
            
            
            this.collection.sessions.id = options.mid;
            this.collection.participants.id = options.mid;
            this.collection.id = options.mid;
            this.collection.participants.on("add", this.addTwo, this);
            this.render();
        },

        template: sessionDetailsTemplate,
        
        el : "#section",

        

        render: function() {
            var self = this;
           
            $(this.el).html(this.template());

             //sessions collection
            this.collection.sessions.fetch({
                success: function(collection) {
                    console.log(collection.id);
                    collection.each(function(index) {
                        // self.addthree(index);
                        console.log(index.id);
                        if (index.id == collection.id) {
                            var title = index.attributes.pid;
                            var location = index.attributes.location;
                            var name = index.attributes.name;
                            var ssid = index.id;
                            var description = index.attributes.description;
                            console.log(description);
                            document.getElementById("titlee").innerHTML = "<b>Session Name : </b>" + title;
                            $("#ssid").attr("value", ssid);
                            document.getElementById("location").innerHTML = "<b>Venue: </b>" + location;
                            $("#ssid").attr("value", ssid);
                            document.getElementById("presenter").innerHTML = "<b>Presenter Name : </b>" + name;
                            $("#ssid").attr("value", ssid);
                            document.getElementById("description").innerHTML = " " + description;
                            $("#ssid").attr("value", ssid);
                        }



                    }, this);
                },
                error: function() {
                    console.log('something went wrong');
                }

            });
 

 // participants collection fetch
             this.collection.participants.fetch({
                success: function(collection) {

                    collection.each(function(index) {

                        console.log(index);

                        self.addTwo(index);
                       
                    }, this);
                },
                error: function() {

                    console.log('some thing went wrong!');
                    
                   
                      
                }
            });

            
          
            return this;
        },


        addTwo: function(model) {

            var singlerecord = new participantSub({
                model: model,
                collection: this.collection
            });

            $(this.el).find("#crud").append(singlerecord.el);


        },


         

        
        handleErrors : function(error){
            $(this.el).find(".error-status").html(error).show();
        },

        clearErrors : function() {
            $(this.el).find(".error-status").empty().hide();  
        },


        addParticipants : function(e){

            var url = Backbone.history.getFragment().split('/');
            var timestamp = url[1];
            console.log(timestamp);
            var username = AppUser.firstname;
            var email = AppUser.email;
            
            var collection = this.collection.participants;

            console.log(collection);
           
                    var participant = new Participant();
                    var  that = this;

                   participant.set('participant',username);
                   participant.set('email',email);
                   participant.set('ssid',timestamp);
                   


             participant.save({
                wait: true
            }, {
                success: function(model,response) {

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


        deleteParticipants :function(e){
             var that = this;
             var collection = this.collection.participants;
            var  ssidd = collection.id;
            var email = AppUser.email;
            console.log(collection.id);
            console.log(collection);
            console.log(AppUser.email);
            
            collection.each(function(model)
            {
                console.log(model.attributes.ssid);
                console.log(ssidd);
              if(model.attributes.ssid === parseInt(ssidd))
              {
                if(email == model.attributes.email){
                    model.destroy({
                        success:function(){
                console.log("success");
                
    //             // $(e.target).closest("tr").remove();
    //             //studentCollection.remove();
               that.undelegateEvents();
            },
            error:function(){
                console.log("here");
            }
        });

                }
                else
                {
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


  var participantSub = Backbone.View.extend({
        template: sessionDetailsSubTemplate,
        tagName: 'tr',


        initialize: function() {
            this.render();
        },
         
    
       render: function() {

            var source = this.template(this.model.toJSON());
            console.log(this.model.toJSON());
            $(this.el).html(source);

            return this;

        }




        
    });

 

    return SessionDetails;

});
