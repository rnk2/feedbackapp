define(['jquery', 'backbone', 'handlebars', 'router', 'signinBoard', 'signinsBoard'], function($, Backbone, Hbs, BaseRouter, SigninModel, SigninCollection) {

    SigninView = Backbone.View.extend({
        tagName: 'div',
        className: 'signin',

        events: {
            "click #login": "login"
        },

        

        render: function() {
            console.log("from signin view");
            var template = $("#signinTemplate").html();
            var html = Handlebars.compile(template);

            $(this.el).html(html);
            return this;
        },



        login: function() {
            
            console.log("signinview");
            var signin = new SigninModel();
            console.log(signin);
            signin.set('username', $("#username").val());
            signin.set('password', $("#password").val());
            
            signin.save(null,{
               
                success:function(model,response){
                    console.log(response.username);
                    
                    if(response.username){
                        window.location.href = 'http://localhost:3000/feedback';
                    }
                    else{
                        window.location.href = 'http://localhost:3000/signup';
                    }
                    
                }
            });            
        }


    });

    return SigninView;

});
