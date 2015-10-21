define(['jquery', 'backbone','handlebars','router','feedBoard','feedsBoard'], function($, Backbone,Hbs,BaseRouter,FeedModel,FeedsCollection) {
    
mailView = Backbone.View.extend({
    tagName: 'div',
    className: 'home',
    events: {
            'click button#send_email': 'sendData',
            

        },
    render: function () {
        console.log("from mail view");
        var template = $("#mailingTemplate").html();
        var html = Handlebars.compile(template);
        
        $(this.el).html(html);

        FeedsCollection.fetch({
                success: function(collection) {
                    console.log('fetch success', this.collection.length);



                    collection.each(function(index) {

                        // self.addone(index);

                        console.log(index.attributes);
                    }, this);
                },
                error: function() {

                    console.log('some thing went wrong!');

                }
            });


        return this;
    },

    sendData : function(e){
        // alert("naresh send data");
        to = $("#to").val();
                        subject = $("#subject").val();
                        text = $("#content").val();
                        ssid = $("#ssid").val();
                        $("#message").text("Sending E-mail...Please wait");
                        $.get("http://localhost:3000/send", {
                                to : to,
                                subject : subject,
                                text: text,
                                ssid : ssid
                            }, function(data) {
                                if (data == "sent") {
                                    $("#message").empty().html("Email is been sent at "+to+".Please check inbox!");
                                    }

                                });
    }

});

return mailView;
       
});
