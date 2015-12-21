define(['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <ul class=\"header\">\n                    <li><p>Username: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.username : stack1), depth0))
    + "</p></li>\n                    <li><a href=\"/requests\">Requests</a>\n                    </li>\n                    \n                    <li><a href=\"/logout\">Logout</a></li>\n                </ul>\n\n\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                <ul class=\"header\">\n                    <li><a href=\"/\">HOME</a></li>\n                    <li><a href=\"/requests\">REQUESTS</a></li>\n                    <li><a href=\"/logout\">LOGOUT</a></li>\n                    \n                   \n                </ul>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div style=\"text-align: center\">\n            <nav class=\"menu\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.req : depth0)) != null ? stack1.user : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\n            </nav>\n        </div>";
},"useData":true})

});