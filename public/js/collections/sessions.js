define(['jquery', 'backbone'], function($, Backbone) {

	var Sessions = Backbone.Collection.extend({
		
		url: function() {
			return '/getSessions';
		},
		initialize: function() {
			
		}

	});

	return Sessions;

});