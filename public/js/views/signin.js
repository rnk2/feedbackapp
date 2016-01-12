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
            'keypress': 'handleEnterBtnSubmit',
            "click #signin": "handleSignin"
        },
        render: function() {
            $(this.el).html(this.template());
            return this;
        },
        handleEnterBtnSubmit: function(e) {
            var code = e.keyCode || e.which;
            if (code == 13) {
                this.handleSignin();
            }
        },
        handleSignin: function() {
            var self = this;
            this.clearErrors();
            this.formHandler.formvalidation("validate");

            if (this.formHandler.formStack.isValid) {

                var userModel = new UserModel({
                    currentRoute: "/signin"
                });
                userModel.set('userEmail', $("#email").val());
                userModel.set('password', $("#password").val());

                userModel.save(null, {
                    success: function(model, response) {
                        if (response.id) {
                            if (response.roleId == "1") {
                                window.location.href = '/dashboard';
                            } else {
                                window.location.href = "/adminhome";
                            }
                        } else {
                            self.handleErrors(response.errorMessage);
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