define(['jquery', 'backbone', 'templates/register','templates/confirmation','user','validation','validatorMap','errorMap'], function($, Backbone, registerTemp,confirmationTemp, UserModel,Validation,validatorMap,errorMap) {
    
var SigninView = Backbone.View.extend({
    
    el : "#section",
    template: registerTemp,
    events : {
        'click #signup': 'handleRegister',
    },
    
    initialize: function() {            
        this.render();  
        this.formHandler = $("#formContainer").formvalidation({
                validatorMap: validatorMap,
                errorMap: errorMap,  
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


        console.log(this.formHandler.formStack.isValid);
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
