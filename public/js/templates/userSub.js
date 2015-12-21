define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n            <td>"
    + alias4(((helper = (helper = helpers.tname || (depth0 != null ? depth0.tname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tname","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + alias4((helpers.formatDate || (depth0 && depth0.formatDate) || alias2).call(alias1,(depth0 != null ? depth0.pst_date : depth0),{"name":"formatDate","hash":{},"data":data}))
    + "</td>\n\n            \n            <td><a href=\"sessionss/"
    + alias4(((helper = (helper = helpers.ssid || (depth0 != null ? depth0.ssid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ssid","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-custom btn-sm active\" role=\"button\">View Details</a></td>\n       ";
},"useData":true})

});