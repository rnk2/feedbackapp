define(['jquery', 'backbone','templates','router','modelBoard', 'collectionBoard'], function($, Backbone,Templates,BaseRouter,BaseModel, BaseCollection) {

    var FeedbackView = Backbone.View.extend({
        template: Templates['adminView'],
        id: '#container',
        className: 'home',

        events: {
            'click button#btnadd': 'addData',
            'click button#btnclear': 'clearInput',
            'click .ratebtn' : 'addtwo',
            'click .emailbtn': 'emailid',
            'click #datetimepicker1' : 'datetime'

        },

        initialize: function() {

            console.log(this.collection.records);
            this.collection.records.on("add", this.addone, this);

        },

        render: function() {
            var self = this;

            // var template = $("#feedbackTemplate").html();
            // var html = Handlebars.compile(template);
            $(this.el).html(this.template);
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
            console.log("adding record");
             console.log(this.collection.records.length);
            var meet = new BaseModel();
            var collection = this.collection.records;
            var id = $(e.currentTarget).data("id");
            
            meet.set('tname', $("#tname").val());
            meet.set('pname', $("#pname").val());
            meet.set('pst_date', $("#pst_date").val());
            
            meet.save({
                wait: true
            }, {
                success: function(model, respose) {

                    console.log(collection);                    

                     collection.add(model);
                },
                error: function() {
                    console.log("Something went wrong while saving the model");
                }


            });
            
            this.clearInput();

        },


        clearInput: function() {
            
            //Clear all Textboxes 
            $("#tblinput input").val('');
        },

        datetime : function(e){

                $('#datetimepicker1').datetimepicker();
                 
       
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
            
            var target=e.currentTarget.getAttribute('data-id');
            
            var rating=e.currentTarget.setAttribute('href',"#sessions/"+target);
            
        },

         emailid : function(e){

            var target=e.currentTarget.getAttribute('data-id');
            
            var rating=e.currentTarget.setAttribute('href',"#mailto/"+target);

        }





    });


    var feedSub = Backbone.View.extend({
        template: Templates['adminSub'],
        tagName: 'tr',
        
        events:{    
        
         'click #btnedt': 'editData',
         'click #btndl': 'deleteData'
    },

        initialize: function() {

            this.render();
        },
        render: function() {
            // console.log('in render');
            // var template = $("#feed-template").html();

            // var source = Handlebars.compile(template);
            var source = this.template(this.model.toJSON());

            $(this.el).html(source);

            return this;

        },

        editData : function(e) {
            
            var target = e.currentTarget.value;
            console.log(target);
        if(target === "Edit"){
            console.log($(this.el));
            $(this.el).find("td").slice(1, 3).each(function(){
                console.log($(this).text());
               $(this).html('<input type="text" value="'+ $(this).text() +'" />');
            });
            e.currentTarget.value = "Update";
        }

        if(target === "Update"){
            var arr = [];
            console.log(arr);
            $(this.el).find("input[type=text]").each(function(){
               arr.push($(this).val());
               $(this).parent().html($(this).val());
            });
           console.log(arr);               
               //var ssid= arr[0];
               
               //var pnamee=arr[2];
               var tnamee=arr[0];
               var datee=arr[1];
              //console.log(this.model.ssid);
               //this.model.set('ssid',ssid)
               this.model.set('tname',tnamee);
               //this.model.set('pname',pnamee);
               this.model.set('pst_date',datee);
                console.log(this.model);
            this.model.save({});
            //console.log(this.model);
            e.currentTarget.value = "Edit";
        }


},

deleteData : function(e){
    //alert("delete button");
    console.log(this.model);
    this.model.destroy({
            success:function(){
                console.log("success");
                $(e.target).closest("tr").remove();
                //studentCollection.remove();
            },
            error:function(){
                console.log("here");
            }
        });

}

    });




    return FeedbackView;
});
