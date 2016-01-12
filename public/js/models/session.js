define(['backbone'], function(Backbone) {

	var SessionModel = Backbone.Model.extend({		
		
		urlRoot: function() {
			return this.get("currentRoute");
		},

		initialize: function() {					
		}
	});


	return SessionModel;

});