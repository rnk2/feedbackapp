define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n            <td>"
    + alias4(((helper = (helper = helpers.partc_name || (depth0 != null ? depth0.partc_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"partc_name","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + alias4(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data}) : helper)))
    + "</td>\n\n            \n       ";
},"useData":true})

});