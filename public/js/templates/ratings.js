define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <ol class=\"breadcrumb\">\r\n            <li><a href=\"index.html\">Home</a></li>\r\n            <li class=\"active\">Users Feedback </li>\r\n        </ol>\r\n        \r\n    </div>\r\n    <div class=\"row\">\r\n            <div class=\"col-sm-2 col-md-2col-lg-2\">\r\n            </div>\r\n            <div class=\"col-sm-10 col-md-10 col-lg-10\">\r\n                <p style=\"color:red\">***Welcome to Feedback page your ratings must be between 1 to 5 </p>\r\n            </div>\r\n        </div>\r\n    <!-- Intro -->\r\n    <div class=\"container text-center\">\r\n        <form>\r\n            <input id=\"input-22\" class=\"rating\" data-min=\"0\" data-max=\"5\" data-step=\"1\">\r\n            <div class=\"form-group\" style=\"margin-top:10px\">\r\n                <button type=\"submit\" id=\"addRating\" class=\"btn btn-primary\">Submit</button>\r\n                <button type=\"reset\" id=\"btnclear\" class=\"btn btn-default\">Reset</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <!-- /Intro-->\r\n    <!-- /container -->\r\n    <!-- Social links. @TODO: replace by link/instructions in template -->\r\n</div>\r\n";
},"useData":true})

});