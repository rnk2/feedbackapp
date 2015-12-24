define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\r\n<!-- container -->\r\n<div class=\"container\">\r\n    <ol class=\"breadcrumb\">\r\n        <li><a href=\"/\">Home</a></li>\r\n        <li class=\"active\">Registration</li>\r\n    </ol>\r\n    <div class=\"row\">\r\n        \r\n        <!-- Article main content -->\r\n        <article class=\"col-xs-12 maincontent\">\r\n            \r\n            \r\n            <div class=\"col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\r\n               <div id=\"formContainer\">\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-body\">\r\n                        <h3 class=\"thin text-center\">Register a new account</h3>\r\n                        <div class=\"error-status\"></div>\r\n                        <hr>\r\n                            \r\n                        <div class=\"row\">\r\n                            <div class=\"top-margin col-md-6\">\r\n                                <label>First Name</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"firstName\" \r\n                                data-val=\"firstname\">\r\n                            </div>\r\n                            <div class=\"top-margin col-md-6\">\r\n                                <label>Last Name</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"lastName\"\r\n                                data-val=\"lastname\">\r\n                            </div>\r\n                        </div>\r\n                            \r\n                        <div class=\"row\">\r\n                            <div class=\"top-margin col-md-12\">\r\n                                <label>Email Address <span class=\"text-danger\">*</span></label>\r\n                                <input type=\"text\" id=\"email\" class=\"form-control\"\r\n                                data-val=\"userEmail\">\r\n                            </div>\r\n                        </div>\r\n                            <div class=\"row top-margin\"> \r\n                                <div class=\"col-sm-6\">\r\n                                    <label>Password <span class=\"text-danger\">*</span></label>\r\n                                    <input type=\"password\" id=\"password\" class=\"form-control\"\r\n                                    data-val=\"password\">\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <label>Confirm Password <span class=\"text-danger\">*</span></label>\r\n                                    <input type=\"password\" class=\"form-control\"\r\n                                    data-val=\"password\">\r\n                                </div>\r\n                            </div>\r\n                            <hr>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-8\">\r\n                                <!--     <label class=\"checkbox\">\r\n                                         <a href=\"page_terms.html\">Terms and Conditions</a>\r\n                                    </label> -->\r\n                                </div>\r\n                                <div class=\"col-lg-4 text-right\">\r\n                                    <button class=\"btn btn-action\" id=\"signup\" type=\"submit\">Register</button>\r\n                                </div>\r\n                            </div>\r\n                    </div>\r\n                    \r\n\r\n\r\n\r\n                </div>\r\n            </div>\r\n            </div>\r\n            \r\n        </article>\r\n        <!-- /Article -->\r\n    </div>\r\n    </div>  <!-- /container -->";
},"useData":true})

});