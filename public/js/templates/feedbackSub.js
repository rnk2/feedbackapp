define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n            <td>"
    + alias4(((helper = (helper = helpers.ssid || (depth0 != null ? depth0.ssid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ssid","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + alias4(((helper = (helper = helpers.user || (depth0 != null ? depth0.user : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"user","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + alias4(((helper = (helper = helpers.pskills || (depth0 != null ? depth0.pskills : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pskills","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + alias4(((helper = (helper = helpers.tskills || (depth0 != null ? depth0.tskills : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tskills","hash":{},"data":data}) : helper)))
    + "</td>\n        ";
},"useData":true})

});