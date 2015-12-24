define(['jquery', 'backbone','helpers','templates/viewSessions','templates/sessionsSub'], function($, Backbone,Helpers,viewSessionsTemplate,sessionsSubTemplate) {

    var ViewSessions = Backbone.View.extend({

        
        initialize : function(){
            this.render();
        
        },

        template: viewSessionsTemplate,
        
        el : "#section",
        
       
        

        render: function() {
            self=this;
           
            $(this.el).html(this.template());

            
            this.collection.fetch({
                success: function(collection) {

                    collection.each(function(index) {

                       
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
        template: sessionsSubTemplate,
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

    return ViewSessions;

});