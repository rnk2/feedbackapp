define(['jquery', 'backbone', 'templates/common/header', 'appUser', 'bootstrap'], function($, Backbone, headerTemp, appUser) {

	var HomeView = Backbone.View.extend({
		initialize: function() {
			this.render();
		},
		template: headerTemp,
		el: "#header",
		render: function() {
			$(this.el).html(this.template(appUser));
			return this;
		}
	});

	return HomeView;
});