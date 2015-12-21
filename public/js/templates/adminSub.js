define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n            <td>"
    + alias4(((helper = (helper = helpers.pname || (depth0 != null ? depth0.pname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pname","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = helpers.tname || (depth0 != null ? depth0.tname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tname","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4((helpers.formatDate || (depth0 && depth0.formatDate) || alias2).call(alias1,(depth0 != null ? depth0.pst_date : depth0),{"name":"formatDate","hash":{},"data":data}))
    + "</td>\r\n            <td><a href=\"sessionss/"
    + alias4(((helper = (helper = helpers.ssid || (depth0 != null ? depth0.ssid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ssid","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-primary btn-sm active\" role=\"button\">Feedback</a></td>\r\n            <td>\r\n                \r\n            <span class=\"icon-input-btn\"><span class=\"glyphicon glyphicon-edit\"></span> <input type=\"submit\" class=\"btn btn-default btn-sm\" id=\"btnedt\" value=\"Edit\"></span>\r\n   \r\n                \r\n\r\n<span class=\"icon-input-btn\"><span class=\"glyphicon glyphicon-trash\"></span> <input type=\"submit\" class=\"btn btn-default btn-sm\" id=\"btndl\" value=\"remove\"></span>\r\n            </td>\r\n        \r\n\r\n        ";
},"useData":true})

});