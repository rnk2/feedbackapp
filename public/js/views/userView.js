define(['jquery', 'backbone','handlebars','router','modelBoard'], function($, Backbone,Hbs,BaseRouter, BaseModel) {
    
UserView = Backbone.View.extend({
    id: '#container',
    className: 'home',
    
     events: {
            'click button#btnadd': 'addData',
            'click button#btnclear': 'clearInput',
            'click .ssbtn' : 'addtwo',
            
        },

    
    

    initialize: function() {


            this.collection.records.on("add", this.addone, this);

        },

        render: function() {
            var self = this;

            var template = $("#user-template").html();
            var html = Handlebars.compile(template);
            $(this.el).html(html);
            this.delegateEvents();

            this.collection.records.fetch({
                success: function(collection) {

                    collection.each(function(index) {

                        self.addone(index);

                        // console.log(index.attributes);
                    }, this);
                },
                error: function() {

                    console.log('some thing went wrong!');

                }
            });


            return this;
        },

        addData: function(e) {
            alert("adding new records");
            console.log("adding record");
            var meet = new BaseModel();
            var collection = this.collection.records;
            var id = $(e.currentTarget).data("id");
            meet.set('ssid', $("#ssid").val());
            meet.set('tname', $("#tname").val());
            meet.set('pname', $("#pname").val());
            meet.set('pst_date', $("#pst_date").val());
            meet.set('partcp', $("#attended").val());
            meet.save({
                wait: true
            }, {
                success: function(model, respose) {
                    console.log("success");

                    //console.log( this.collection.base);

                     collection.add(model);
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
            //e.preventDefault();
            // alert("ratings button");
            var target=e.currentTarget.getAttribute('data-id');
            
            var rating=e.currentTarget.setAttribute('href',"#sessions/"+target);
            
            // $(".ratbtn").off('click');

        }





    });


    var feedSub = Backbone.View.extend({

        tagName: 'tr',
        events:{    
        
         'click #btnedt': 'editData'
    },

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

        },

        editData : function(e) {
            alert("updates");
            console.log(this.model);
            var target = e.currentTarget.value;
            console.log(target);
        if(target === "Edit"){
            console.log($(this.el));
            $(this.el).find("td").slice(0, 4).each(function(){
                console.log($(this).text());
               $(this).html('<input type="text" value="'+ $(this).text() +'" />');
            });
            e.currentTarget.value = "Update";
        }

        if(target === "Update"){
            var arr = [];
            $(this.el).find("input[type=text]").each(function(){
               arr.push($(this).val());
               $(this).parent().html($(this).val());
            });
           console.log(arr);
               
               var ssid= arr[0];
               var tname=arr[1];
               var pname=arr[2];
               var date=arr[3];
              console.log(this.model);
               this.model.set('ssid', ssid);
               this.model.set('tname',tname);
               this.model.set('pname',pname);
               this.model.set('pst_date',date);
            this.model.save();
            console.log(this.model);
            e.currentTarget.value = "Edit";
        }

        }
    });






return UserView;
       
});
