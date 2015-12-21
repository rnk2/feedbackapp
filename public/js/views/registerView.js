define(['jquery', 'backbone', 'templates/register','templates/confirmation','user'], function($, Backbone, registerTemp,confirmationTemp, UserModel) {
    
var SigninView = Backbone.View.extend({
    
    el : "#section",
    template: registerTemp,
    events : {
        'click #signup': 'handleRegister',
    },
    
    initialize: function() {            
        this.render();    
    },

    render: function () {
        $(this.el).html(this.template());
        return this;
    },

    handleRegister : function(e){
        e.preventDefault();
        var self = this;
        self.clearErrors();
        var userModel = new UserModel({currentRoot : "/signup"});
         userModel.set({
            firstname : $("#firstName").val().trim(),
            lastname : $("#lastName").val().trim(),
            username : $("#email").val().trim(),
            password : $("#password").val().trim()
         });         

        // Post to register controller  "/signup"
         userModel.save({
                wait: true
            },{
                success: function(model, response) {                    

                    if(response.errorMessage){
                        self.handleErrors(response.errorMessage);
                        return;
                    }

                    if(response.id){                        
                        $(self.el).html(confirmationTemp({userName : response.name}));
                    }
                    else{                        
                    }
                },
                error: function(error) {
                    self.handleErrors(error);
                }
            });
        },
        handleErrors : function(error){
            $(this.el).find(".error-status").html(error).show();
        },

        clearErrors : function() {
            $(this.el).find(".error-status").empty().hide();  
        }


});

return SigninView;
       
});
