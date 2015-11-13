define(['jquery', 'backbone','router', 'signinBoard','templates', 'signinsBoard'], function($, Backbone,BaseRouter, SigninModel,Templates,SigninCollection) {

    SigninView = Backbone.View.extend({

        template: Templates['signin'],
        
        
         
        //tagName: 'div',
        //className: 'signin',

        events: {
            'keypress': 'keyAction',
            "click #login": "login"
        },

        

        render: function() {
            console.log("from signin view");
            //var template = $("#signinTemplate").html();
            //var html = Handlebars.compile(template);
            //console.log(html);
            console.log(Templates);
            //alert("inside template");
            //var template = Handlebars.Templates['signin'];
            $(this.el).html(this.template);
            return this;
        },

        keyAction : function(e){
            var code = e.keyCode || e.which;
            if(code == 13){
                this.login();
            }            
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
                            
                            Backbone.history.navigate('/user/'+uname,{ trigger:true, replace: true })
                       
                        }
                        else{
                            Backbone.history.navigate('/feedback',{ trigger:true, replace: true })
                            
                
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
