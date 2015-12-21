define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return " \n            <div class=\"container startup\">\n                <div class=\"row\">\n                    <div class=\"col-sm-1 col-md-1\">\n                    </div>\n                    <div class=\"col-sm-8 col-md-8\">\n                        <div id=\"titlee\">\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-sm-1 col-md-1\">\n\n                    </div>\n                   \n                        <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                            <div id=\"thanks\">\n                            </div>\n                        </div>\n                \n                </div>\n               \n\n                <div class=\"row startup\">\n                    <div class=\"col-sm-1 col-md-1\">\n\n                    </div>\n                    <div class=\"col-sm-4 col-md-4 sessionid\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-5 col-md-5 table-scroll\">\n                                <h5>Participants List</h5>\n                                <table class=\"table table-hover\" id=\"feed\">\n                                    <tr>\n                                        <th>Names</th>\n                                    </tr>\n                                </table>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                        </div>\n                        <!-- Modal -->\n                        <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n                            <div class=\"modal-dialog\">\n                                <!-- Modal content-->\n                                <div class=\"modal-content\">\n                                    <div class=\"modal-header\">\n                                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                                        <h4 class=\"modal-title\">Add Participants</h4>\n                                    </div>\n                                    <div class=\"modal-body\">\n                                        <table class=\"table table-hover\" id=\"tblinput\">\n                                            <thead>\n                                                <tr>\n                                                    <th width=\"75\"><strong>Participant Name</strong></th>\n                                                    <th width=\"75\"><strong>Email</strong></th>\n                                                </tr>\n                                            </thead>\n                                            <tr>\n                                                <td>\n                                                    <input type=\"text\" id=\"partc_name\" placeholder=\"presenter\" /> </td>\n                                                <td>\n                                                    <input type=\"text\" id=\"email\" placeholder=\"email\" /> </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                </td>\n                                                <td>\n                                                    <button id=\"nusebtn\" data-dismiss=\"modal\">Submitt</button>\n                                                    <button id=\"btnclear\">Reset</button>\n                                                </td>\n                                            </tr>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div id=\"myModal3\" class=\"modal fade\" role=\"dialog\">\n                            <div class=\"modal-dialog\">\n                                <!-- Modal content-->\n                                <div class=\"modal-content\">\n                                    <div class=\"modal-header\">\n                                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                                        <h4 class=\"modal-title\">Add Participants in Team</h4>\n                                    </div>\n                                    <div class=\"modal-body\">\n                                        <table class=\"table table-hover\" id=\"tblinput\">\n                                            <thead>\n                                                <tr>\n                                                    <th><strong>Participant Name</strong></th>\n                                                    <th><strong>Email</strong></th>\n                                                    <th><strong>Select Team</strong></th>\n                                                </tr>\n                                            </thead>\n                                            <tr>\n                                                <td>\n                                                    <input type=\"text\" id=\"partc_name\" placeholder=\"participants\" /> </td>\n                                                <td>\n                                                    <input type=\"text\" id=\"email\" placeholder=\"email\" /> </td>\n\n                                                    <td>\n                                    \n                                    <select class=\"form-control\">\n                                                <option value=\"one\">UI</option>\n                                                <option value=\"two\">JAVA</option>\n                                                <option value=\"three\">TESTING</option>\n                                                <option value=\"four\">SST</option>\n                                                <option value=\"five\">PAT</option>\n                                            </select>\n                                            \n                                    </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                </td>\n                                                <td >\n                                                    <button id=\"nusebtn\" data-dismiss=\"modal\" class=\"btn-default pull-right\">Add New</button>\n                                                    \n                                                    </td>\n                                                    \n                                                    <td>\n                                                    <button id=\"btnclear\" class=\"btn-default\">Send Mail</button>\n                                                </td>\n                                            </tr>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        \n                        <span id=\"message\"></span>\n                    </div>\n                    <div class=\"col-sm-1 col-md-1\">\n                    </div>\n                    <div class=\"col-sm-5 col-md-5\">\n                        <div class=\"row\">\n                            <h5>Feedback</h5>\n                            <div class=\"col-sm-10 col-md-10\">\n                                <div style=\"height:450px; width:600px\">\n                                    <canvas id=\"canvas\"></canvas>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                </div>\n            </div>\n        ";
},"useData":true})

});