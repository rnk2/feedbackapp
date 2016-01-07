define(['jquery', 'backbone', 'templates/signin', 'user', 'validation', 'validators/signin', 'errorMessages/signin'], function($, Backbone, signinTemplate, UserModel, Validation, signinValidators, signinErrors) {

    var SigninView = Backbone.View.extend({

        initialize: function() {
            this.render();
            this.formHandler = $("#formContainer").formvalidation({
                validatorMap: signinValidators,
                errorMap: signinErrors,
                showGenericError: false
            });
        },
        template: signinTemplate,
        el: "#section",
        events: {
            'keypress': 'keyAction',
            "click #signin": "handleSignin"
        },
        render: function() {
            $(this.el).html(this.template());
            return this;
        },
        keyAction: function(e) {
            var code = e.keyCode || e.which;
            if (code == 13) {
                this.handleSignin();
            }
        },
        handleSignin: function() {
            var self = this;
            this.clearErrors();


            this.formHandler.formvalidation("validate");
            console.log(this.formHandler);

            console.log(this.formHandler.formStack.isValid);

            if (this.formHandler.formStack.isValid) {

                var userModel = new UserModel({
                    currentRoot: "/signin"
                });
                userModel.set('username', $("#email").val());
                userModel.set('password', $("#password").val());


                userModel.save(null, {

                    success: function(model, response) {

                        console.log(response);

                        if (response.id) {
                            if (response.roleid == "1") {
                                console.log("")
                                window.location.href = '/dashboard';
                                //Backbone.history.navigate('/profile',{ trigger:true})
                            } else {
                                window.location.href = "/adminhome";
                                //Backbone.history.navigate('/feedback',{ trigger:true})
                            }

                        } else {

                            self.handleErrors(response.errorMessage);
                            //Backbone.history.navigate('/signup',{ trigger:true, replace: true })



                        }


                    }
                });
            }





        },

        handleErrors: function(error) {
            $(this.el).find(".error-status").html(error).show();
        },

        clearErrors: function() {
            $(this.el).find(".error-status").empty().hide();
        }


    });

    return SigninView;

});