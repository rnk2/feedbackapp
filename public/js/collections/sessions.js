define(['jquery', 'backbone', 'sessionModel'], function($, Backbone, SessionModel) {

	var Sessions = Backbone.Collection.extend({
		model: SessionModel,
		url: function() {
			return '/getSessions';
		},
		initialize: function() {}

	});

	return Sessions;

});