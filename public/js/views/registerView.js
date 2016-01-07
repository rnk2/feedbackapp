define(['jquery', 'backbone', 'templates/register','templates/confirmation','user','validation','validators/register','errorMessages/register'], 
    function($, Backbone, registerTemp,confirmationTemp, UserModel,Validation, registerValidators, registerErrors) {
    
var SigninView = Backbone.View.extend({
    
    el : "#section",
    template: registerTemp,
    events : {
        'click #signup': 'handleRegister',
    },
    
    initialize: function() {            
        this.render();  
        this.formHandler = $("#formContainer").formvalidation({
                validatorMap: registerValidators,
                errorMap: registerErrors,  
                showGenericError : false
              });  
    },

    render: function () {
        $(this.el).html(this.template());
        return this;
    },

    handleRegister : function(e){
        e.preventDefault();
        var self = this;
        self.clearErrors();
        this.formHandler.formvalidation("validate");

        if(this.formHandler.formStack.isValid){

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
                       console.log(response.id);
                       console.log(response.name);                    
                        $(self.el).html(confirmationTemp({userName : response.name}));
                    }
                    else{                        
                    }
                },
                error: function(error) {
                    self.handleErrors(error);
                }
            });    




        }
            

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
