define(['jquery', 'backbone'], function($, Backbone) {

  var LocationsCollection = Backbone.Collection.extend({
    url:'/getLocations',
    initialize: function() {
      console.log("collection created from base");
    }
  });
  return LocationsCollection;
});