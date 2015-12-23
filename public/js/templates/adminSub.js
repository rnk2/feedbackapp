define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n            <td>"
    + alias4(((helper = (helper = helpers.presentername || (depth0 != null ? depth0.presentername : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"presentername","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = helpers.topicname || (depth0 != null ? depth0.topicname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"topicname","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = helpers.pst_date || (depth0 != null ? depth0.pst_date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pst_date","hash":{},"data":data}) : helper)))
    + "</td>\r\n            \r\n                \r\n            \r\n   \r\n                \r\n\r\n\r\n\r\n        ";
},"useData":true})

});