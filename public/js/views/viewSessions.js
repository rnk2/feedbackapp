define(['jquery', 'backbone','templates/viewSessions'], function($, Backbone,viewSessionsTemplate) {

    var ViewSessions = Backbone.View.extend({

        
        initialize : function(){
            this.render();
            


           alert("fron sessions view");


        },

        template: viewSessionsTemplate,
        
        el : "#section",
        
        events: {
            
        },
        

        render: function() {
            $(this.el).html(this.template());
            return this;
        },

       

        
        handleErrors : function(error){
            $(this.el).find(".error-status").html(error).show();
        },

        clearErrors : function() {
            $(this.el).find(".error-status").empty().hide();  
        }


    });

    return ViewSessions;

});
