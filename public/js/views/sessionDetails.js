define(['jquery', 'backbone','templates/sessionDetails',], function($, Backbone,sessionDetailsTemplate) {

    var SessionDetails = Backbone.View.extend({

        
        initialize : function(){
            this.render();
        
        },

        template: sessionDetailsTemplate,
        
        el : "#section",
        
       
        

        render: function() {
            self=this;
           
            $(this.el).html(this.template());

            
          
            return this;
        },

         

        
        handleErrors : function(error){
            $(this.el).find(".error-status").html(error).show();
        },

        clearErrors : function() {
            $(this.el).find(".error-status").empty().hide();  
        },


       


    });


 

    return SessionDetails;

});
