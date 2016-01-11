define(['jquery', 'backbone', 'templates/common/header','appUser'], function($, Backbone, headerTemp, appUser) {

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