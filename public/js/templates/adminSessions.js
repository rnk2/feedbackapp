define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return " \r\n            <div class=\"container startup\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-1 col-md-1\">\r\n                    </div>\r\n                    <div class=\"col-sm-8 col-md-8\">\r\n                        <div id=\"titlee\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-1 col-md-1\">\r\n\r\n                    </div>\r\n                   \r\n                        <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n                            <div id=\"thanks\">\r\n                            </div>\r\n                        </div>\r\n                \r\n                </div>\r\n               \r\n\r\n                <div class=\"row startup\">\r\n                    <div class=\"col-sm-1 col-md-1\">\r\n\r\n                    </div>\r\n                    <div class=\"col-sm-4 col-md-4 sessionid\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-5 col-md-5 table-scroll\">\r\n                                <h5>Participants List</h5>\r\n                                <table class=\"table table-hover\" id=\"feed\">\r\n                                    <tr>\r\n                                        <th>Names</th>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                        </div>\r\n                        <!-- Modal -->\r\n                        <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n                            <div class=\"modal-dialog\">\r\n                                <!-- Modal content-->\r\n                                <div class=\"modal-content\">\r\n                                    <div class=\"modal-header\">\r\n                                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                                        <h4 class=\"modal-title\">Add Participants</h4>\r\n                                    </div>\r\n                                    <div class=\"modal-body\">\r\n                                        <table class=\"table table-hover\" id=\"tblinput\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th width=\"75\"><strong>Participant Name</strong></th>\r\n                                                    <th width=\"75\"><strong>Email</strong></th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <input type=\"text\" id=\"partc_name\" placeholder=\"presenter\" /> </td>\r\n                                                <td>\r\n                                                    <input type=\"text\" id=\"email\" placeholder=\"email\" /> </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <button id=\"nusebtn\" data-dismiss=\"modal\">Submitt</button>\r\n                                                    <button id=\"btnclear\">Reset</button>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"myModal3\" class=\"modal fade\" role=\"dialog\">\r\n                            <div class=\"modal-dialog\">\r\n                                <!-- Modal content-->\r\n                                <div class=\"modal-content\">\r\n                                    <div class=\"modal-header\">\r\n                                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                                        <h4 class=\"modal-title\">Add Participants in Team</h4>\r\n                                    </div>\r\n                                    <div class=\"modal-body\">\r\n                                        <table class=\"table table-hover\" id=\"tblinput\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th><strong>Participant Name</strong></th>\r\n                                                    <th><strong>Email</strong></th>\r\n                                                    <th><strong>Select Team</strong></th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <input type=\"text\" id=\"partc_name\" placeholder=\"participants\" /> </td>\r\n                                                <td>\r\n                                                    <input type=\"text\" id=\"email\" placeholder=\"email\" /> </td>\r\n\r\n                                                    <td>\r\n                                    \r\n                                    <select class=\"form-control\">\r\n                                                <option value=\"one\">UI</option>\r\n                                                <option value=\"two\">JAVA</option>\r\n                                                <option value=\"three\">TESTING</option>\r\n                                                <option value=\"four\">SST</option>\r\n                                                <option value=\"five\">PAT</option>\r\n                                            </select>\r\n                                            \r\n                                    </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>\r\n                                                </td>\r\n                                                <td >\r\n                                                    <button id=\"nusebtn\" data-dismiss=\"modal\" class=\"btn-default pull-right\">Add New</button>\r\n                                                    \r\n                                                    </td>\r\n                                                    \r\n                                                    <td>\r\n                                                    <button id=\"btnclear\" class=\"btn-default\">Send Mail</button>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        \r\n                        <span id=\"message\"></span>\r\n                    </div>\r\n                    <div class=\"col-sm-1 col-md-1\">\r\n                    </div>\r\n                    <div class=\"col-sm-5 col-md-5\">\r\n                        <div class=\"row\">\r\n                            <h5>Feedback</h5>\r\n                            <div class=\"col-sm-10 col-md-10\">\r\n                                <div style=\"height:450px; width:600px\">\r\n                                    <canvas id=\"canvas\"></canvas>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                </div>\r\n            </div>\r\n        ";
},"useData":true})

});