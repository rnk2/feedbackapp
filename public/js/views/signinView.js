define(['jquery', 'backbone','router','signinBoard','templates', 'signinsBoard'], function($, Backbone,BaseRouter,SigninModel,Templates,SigninCollection) {

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
            //console.log(signin);
            signin.set('username', $("#username").val());
            signin.set('password', $("#password").val());
            
            signin.save(null,{
               
                success:function(model,response){
                    console.log(response.username);
                     var User,uname = response.username;
                     
                     // alert("sigin");
                     console.log(response.role);
                     

                    if(uname){

                        if(response.role == "User"){
                            window.location.href = '/userhome';
                            //Backbone.history.navigate('/profile',{ trigger:true})
                       
                        }
                        else{
                            window.location.href = "/adminhome";
                            //Backbone.history.navigate('/feedback',{ trigger:true})                            
                
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
