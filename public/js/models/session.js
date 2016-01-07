define(['backbone'], function(Backbone) {

	var sessionModel = Backbone.Model.extend({		
		urlRoot: '/createSession',
		initialize: function() {			
		
		}
	});


	return sessionModel;

});