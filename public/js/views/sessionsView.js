define(['jquery', 'backbone','handlebars','router'], function($, Backbone,Hbs,BaseRouter) {
    
SessionView = Backbone.View.extend({
    tagName: 'div',
    className: 'home',
     events: {
            'click button#sbutton': 'addData'
            

        },
    render: function () {
        console.log("from sessions view");
        var template = $("#sessionsTemplate").html();
        var html = Handlebars.compile(template);
        
        $(this.el).html(html);
        return this;
    },

    addData: function(e) {
            
            

            alert("submit");

        },


});

return SessionView;
       
});
