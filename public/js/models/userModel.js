define(['jquery', 'backbone'], function($, Backbone) {
    
var Meeting = Backbone.Model.extend({
	urlRoot : '/usessions',
    idAttribute : 'uname',

    
    defaults: {
        
        tname :'unknown',
        pname :'unknown',
        pst_date:'unknown'
              
    },

    initialize:function(){
        console.log("model created from base");
        
    }
    
});


return Meeting;
       
});

