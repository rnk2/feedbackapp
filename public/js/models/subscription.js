define(['backbone'], function(Backbone) {

	var SubscriptionModel = Backbone.Model.extend({		
		
		urlRoot: function() {
			return this.get("currentRoute");
		},

		initialize: function() {					
		}
	});


	return SubscriptionModel;

});