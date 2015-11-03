define(['jquery', 'backbone','handlebars','router','userSession','userSessions','dateformat'], function($, Backbone,Hbs,BaseRouter,UserModel,UserSessions,Dateformat) {
    
UserView = Backbone.View.extend({
    id: '#container',
    className: 'home',
    
     events: {
            'click button#btnadd': 'addData',
            'click button#btnclear': 'clearInput',
            'click .ssbtn' : 'addtwo',
            
        },

    
    

    initialize: function(options) {

            console.log(this.collection);
            this.collection.on("add", this.addone, this);
            this.collection.uname = options.mid;
            
        },

        render: function() {
            var self = this;

            var template = $("#user-template").html();
            var html = Handlebars.compile(template);
            $(this.el).html(html);
            this.delegateEvents();

            UserSessions.fetch({
                success: function(collection) {
                    // console.log(collection.uname);
                    document.getElementById("presenter").innerHTML = "Name : " + collection.uname;
                    collection.each(function(index) {

                        self.addone(index);
                    }, this);
                },
                error: function() {

                    console.log('some thing went wrong!');

                }
            });


            return this;
        },        
             

        addData: function(e) {
            var url = Backbone.history.getFragment().split('/');            
            var timestamp = url[1]
            console.log(timestamp);
            console.log("adding record");
            var meet = new UserModel();
            var id = $(e.currentTarget).data("id");
            meet.set('tname', $("#tname").val());
            meet.set('pname',timestamp);
            meet.set('pst_date', $("#pst_date").val());
            meet.set('partcp', $("#attended").val());
            meet.save({
                wait: true
            }, {
                success: function(model, respose) {
                    console.log("success");
                     UserSessions.add(model);
                },
                error: function() {
                    console.log("Something went wrong while saving the model");
                }


            });

        },

         


        clearInput: function() {
            //Clear all Textboxes 
            $("#tblinput input").val('');
        },

        addone: function(model) {

            var subview = new feedSub({
                model: model,
                collection: this.collection
            });
           
            $(this.el).find("#crud").append(subview.el);
            subview.delegateEvents();

        },

        addtwo : function(e){
            
            var target=e.currentTarget.getAttribute('data-id');
            
            var rating=e.currentTarget.setAttribute('href',"#sessions/"+target);
           
        }





    });


    var feedSub = Backbone.View.extend({

        tagName: 'tr',
        initialize: function() {            
            this.render();
        },
        render: function() {
            // console.log('in render');
            var template = $("#userfeed-template").html();

            var source = Handlebars.compile(template);
            var html = source(this.model.toJSON());

            $(this.el).html(html);

            return this;

        }

        
    });






return UserView;
       
});
