define(['jquery', 'backbone','templates/sessionDetails',], function($, Backbone,sessionDetailsTemplate) {

    var SessionDetails = Backbone.View.extend({

        
        initialize : function(options){
            this.render();
            this.collection.id = options.mid;
        
        },

        template: sessionDetailsTemplate,
        
        el : "#section",
        
       
        

        render: function() {
            self=this;
           
            $(this.el).html(this.template());

             //sessions collection
            this.collection.fetch({
                success: function(collection) {
                    console.log(collection.id);
                    collection.each(function(index) {
                        // self.addthree(index);
                        console.log(index.id);
                        if (index.id == collection.id) {
                            var title = index.attributes.pid;
                            var location = index.attributes.location;
                            var name = index.attributes.name;
                            var ssid = index.id;
                            document.getElementById("titlee").innerHTML = "Session Name : " + title;
                            $("#ssid").attr("value", ssid);
                            document.getElementById("location").innerHTML = "Venue: : " + location;
                            $("#ssid").attr("value", ssid);
                            document.getElementById("presenter").innerHTML = "Presenter Name : " + name;
                            $("#ssid").attr("value", ssid);
                        }



                    }, this);
                },
                error: function() {
                    console.log('something went wrong');
                }

            });

            
          
            return this;
        },

         

        
        handleErrors : function(error){
            $(this.el).find(".error-status").html(error).show();
        },

        clearErrors : function() {
            $(this.el).find(".error-status").empty().hide();  
        },


       


    });


 

    return SessionDetails;

});
