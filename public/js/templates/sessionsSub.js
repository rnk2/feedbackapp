define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n            \r\n            <td>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = helpers.pid || (depth0 != null ? depth0.pid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pid","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4((helpers.formatDate || (depth0 && depth0.formatDate) || alias2).call(alias1,(depth0 != null ? depth0.date : depth0),{"name":"formatDate","hash":{},"data":data}))
    + "</td>\r\n            \r\n                \r\n            \r\n   \r\n                \r\n\r\n\r\n\r\n        \r\n\r\n            \r\n       ";
},"useData":true})

});