define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "this is dashboard\r\n\r\n\r\n<div class=\"row startup\">\r\n    <div class=\"col-sm-1 col-md-1\" startup>\r\n    </div>\r\n    <div class=\"col-sm-8 col-md-8\" startup>\r\n        <table class=\"table table-hover\" id=\"tblinput\">\r\n            <thead>\r\n                <tr>\r\n                    <th width=\"75\"><strong>Presenter Name</strong></th>\r\n                    <th width=\"75\"><strong>Topic Name</strong></th>\r\n                    <th width=\"75\"><strong>Date</strong></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td>\r\n                        <input type=\"text\" id=\"pname\" placeholder=\"presenter\" /> </td>\r\n                        <td>\r\n                            <input type=\"text\" id=\"tname\" placeholder=\"topic name\" /> </td>\r\n                            <td>\r\n                                <div class='col-sm-9'>\r\n                                    \r\n                                    <div class='input-group date' id='datetimepicker1'>\r\n                                        <input type='text' class=\"form-control\" id=\"pst_date\" />\r\n                                        <span class=\"input-group-addon\">\r\n                                            <span class=\"glyphicon glyphicon-calendar\"></span>\r\n                                        </span>\r\n                                    </div>\r\n                                    \r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                            </td>\r\n                            <td>\r\n                            </td>\r\n                            <td>\r\n                                <button id=\"btnadd\">Submit</button>\r\n                                <button id=\"btnclear\">Reset</button>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-1 col-md-1\">\r\n                </div>\r\n                <div class=\"col-sm-8 col-md-8\">\r\n                    <table class=\"table table-hover\" id=\"crud\" >\r\n                        <thead>\r\n                            <tr>\r\n                                <th width=\"\">Presenter</th>\r\n                                <th width=\"\">Topic Name</th>\r\n                                <th width=\"\">Date</th>\r\n                                <th width=\"\">Get Feedback</th>\r\n                                <th width=\"\">Changes</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            \r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>";
},"useData":true})

});