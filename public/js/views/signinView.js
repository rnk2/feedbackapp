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
                    console.log(response.role);
                     var uname = response.username;
                     console.log(uname);

                    if(uname){

                        if(response.role==1){
                             alert("signin");
                             //window.location.href = "http://localhost:3000/user/"+uname+"";
                            //Backbone.history.navigate(href.slice(root.length), true);
                            Backbone.history.navigate('/user/'+uname,{ trigger:true, replace: true })
                            
                             


                        }
                        else{
                            Backbone.history.navigate('/feedback',{ trigger:true, replace: true })
                            //window.location.href ='http://localhost:3000/feedback';
                           

                        }

                    }else{

                        
                        Backbone.history.navigate('/signup',{ trigger:true, replace: true })



                    }
                    
                    
                }
            });            
        }


    });

    return SigninView;

});
