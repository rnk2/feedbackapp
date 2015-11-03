define(['jquery', 'backbone', 'handlebars','router','registrationBoard','registrationsBoard'], function($, Backbone,Hbs,BaseRouter,RegisterModel,RegisterCollection) {
    
SigninView = Backbone.View.extend({
    tagName: 'div',
    className: 'signin',
    
    events : {
        'click button#signup': 'signup',
    },

    initialize: function() {


            //this.collection.on("signin", this.signin, this);
            console.log(RegisterCollection);

        },

    render: function () {
        console.log("from signin view");
        var template = $("#registerTemplate").html();
        var html = Handlebars.compile(template);
        
        $(this.el).html(html);
        return this;
    },

    signup : function(e){
        console.log("signupview");
        var signup = new RegisterModel();
        console.log(signup);
        // alert("signup");
         signup.set('username',$("#username").val());
         // signup.set('email',$("#email").val());
         signup.set('password',$("#password").val());
         signup.set('roll',1);
         signup.save({
                wait: true
            },{
                success: function(model, response) {
                    
                    console.log(response);
                    if(response.username){
                        window.location.href = 'http://localhost:3000/#signin';
                    }
                    else{
                        window.location.href = 'http://localhost:3000/signup';
                    }

                     //RegisterCollection.add(model);
                },
                error: function() {
                    console.log("Something went wrong while saving the model");
                }


            });


    }


});

return SigninView;
       
});
