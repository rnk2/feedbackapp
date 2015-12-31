define(['jquery', 'backbone','helpers','templates/mySessions','templates/mySessionsSubView','appUser','userSessions'], function($, Backbone,Helpers,mySessionsTemplate,mySessionsSubTemplate,AppUser,UserSessions) {

    var MySessions = Backbone.View.extend({

        
        initialize : function(options){
            this.render();
            // this.collection.sessions.id = options.mid;
           
        
        },

        template: mySessionsTemplate,
        
        el : "#section",
        
       
        

        render: function() {
            self=this;
           
            $(this.el).html(this.template());

            
            UserSessions.fetch({
                success: function(collection) {

                    collection.each(function(index) {

                      console.log(index);  
                   self.addone(index);
                  

                       
                    }, this);
                },
                error: function() {

                    console.log('some thing went wrong!');
                     

                }
            });
            


            return this;
        },

         addone: function(model) {

            var singlerecord = new sessionSub({
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


       


    });


 var sessionSub = Backbone.View.extend({
        template: mySessionsSubTemplate,
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

    return MySessions;

});
