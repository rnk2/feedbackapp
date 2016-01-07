define(['jquery', 'backbone', 'templates/common/header'], function($, Backbone, headerTemp) {

	HomeView = Backbone.View.extend({
		initialize: function(options) {
			this.options = options;
			this.render();
		},
		template: headerTemp,
		el: "#header",
		render: function() {
			$(this.el).html(this.template(this.options));
			return this;
		}
	});
	return HomeView;
});