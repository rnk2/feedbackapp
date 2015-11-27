define(['handlebars.runtime'], function(Handlebars) {
  Handlebars = Handlebars["default"];  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['adminSessions'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return " \r\n            <div class=\"container startup\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-1 col-md-1\">\r\n                    </div>\r\n                    <div class=\"col-sm-8 col-md-8\">\r\n                        <div id=\"titlee\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-1 col-md-1\">\r\n\r\n                    </div>\r\n                   \r\n                        <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n                            <div id=\"thanks\">\r\n                            </div>\r\n                        </div>\r\n                \r\n                </div>\r\n               \r\n\r\n                <div class=\"row startup\">\r\n                    <div class=\"col-sm-1 col-md-1\">\r\n\r\n                    </div>\r\n                    <div class=\"col-sm-4 col-md-4 sessionid\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-5 col-md-5 table-scroll\">\r\n                                <h5>Participants List</h5>\r\n                                <table class=\"table table-hover\" id=\"feed\">\r\n                                    <tr>\r\n                                        <th>Names</th>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                        </div>\r\n                        <!-- Modal -->\r\n                        <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n                            <div class=\"modal-dialog\">\r\n                                <!-- Modal content-->\r\n                                <div class=\"modal-content\">\r\n                                    <div class=\"modal-header\">\r\n                                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                                        <h4 class=\"modal-title\">Add Participants</h4>\r\n                                    </div>\r\n                                    <div class=\"modal-body\">\r\n                                        <table class=\"table table-hover\" id=\"tblinput\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th width=\"75\"><strong>Participant Name</strong></th>\r\n                                                    <th width=\"75\"><strong>Email</strong></th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <input type=\"text\" id=\"partc_name\" placeholder=\"presenter\" /> </td>\r\n                                                <td>\r\n                                                    <input type=\"text\" id=\"email\" placeholder=\"email\" /> </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <button id=\"nusebtn\" data-dismiss=\"modal\">Submitt</button>\r\n                                                    <button id=\"btnclear\">Reset</button>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"myModal3\" class=\"modal fade\" role=\"dialog\">\r\n                            <div class=\"modal-dialog\">\r\n                                <!-- Modal content-->\r\n                                <div class=\"modal-content\">\r\n                                    <div class=\"modal-header\">\r\n                                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                                        <h4 class=\"modal-title\">Add Participants in Team</h4>\r\n                                    </div>\r\n                                    <div class=\"modal-body\">\r\n                                        <table class=\"table table-hover\" id=\"tblinput\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th><strong>Participant Name</strong></th>\r\n                                                    <th><strong>Email</strong></th>\r\n                                                    <th><strong>Select Team</strong></th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <input type=\"text\" id=\"partc_name\" placeholder=\"participants\" /> </td>\r\n                                                <td>\r\n                                                    <input type=\"text\" id=\"email\" placeholder=\"email\" /> </td>\r\n\r\n                                                    <td>\r\n                                    \r\n                                    <select class=\"form-control\">\r\n                                                <option value=\"one\">UI</option>\r\n                                                <option value=\"two\">JAVA</option>\r\n                                                <option value=\"three\">TESTING</option>\r\n                                                <option value=\"four\">SST</option>\r\n                                                <option value=\"five\">PAT</option>\r\n                                            </select>\r\n                                            \r\n                                    </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>\r\n                                                </td>\r\n                                                <td >\r\n                                                    <button id=\"nusebtn\" data-dismiss=\"modal\" class=\"btn-default pull-right\">Add New</button>\r\n                                                    \r\n                                                    </td>\r\n                                                    \r\n                                                    <td>\r\n                                                    <button id=\"btnclear\" class=\"btn-default\">Send Mail</button>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        \r\n                        <span id=\"message\"></span>\r\n                    </div>\r\n                    <div class=\"col-sm-1 col-md-1\">\r\n                    </div>\r\n                    <div class=\"col-sm-5 col-md-5\">\r\n                        <div class=\"row\">\r\n                            <h5>Feedback</h5>\r\n                            <div class=\"col-sm-10 col-md-10\">\r\n                                <div style=\"height:450px; width:600px\">\r\n                                    <canvas id=\"canvas\"></canvas>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                </div>\r\n            </div>\r\n        ";
},"useData":true});
templates['adminSub'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n            <td>"
    + alias4(((helper = (helper = helpers.pname || (depth0 != null ? depth0.pname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pname","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = helpers.tname || (depth0 != null ? depth0.tname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tname","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = helpers.pst_date || (depth0 != null ? depth0.pst_date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pst_date","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td><a href=\"sessionss/"
    + alias4(((helper = (helper = helpers.ssid || (depth0 != null ? depth0.ssid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ssid","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-primary btn-sm active\" role=\"button\">Feedback</a></td>\r\n            <td>\r\n                \r\n            <span class=\"icon-input-btn\"><span class=\"glyphicon glyphicon-edit\"></span> <input type=\"submit\" class=\"btn btn-default btn-sm\" id=\"btnedt\" value=\"Edit\"></span>\r\n   \r\n                \r\n\r\n<span class=\"icon-input-btn\"><span class=\"glyphicon glyphicon-trash\"></span> <input type=\"submit\" class=\"btn btn-default btn-sm\" id=\"btndl\" value=\"remove\"></span>\r\n            </td>\r\n        \r\n\r\n        <span class=\"glyphicon glyphicon-edit\"></span>";
},"useData":true});
templates['adminView'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\r\n            <div class=\"row startup\">\r\n                <div class=\"col-sm-1 col-md-1\" startup>\r\n                </div>\r\n                <div class=\"col-sm-8 col-md-8\" startup>\r\n                    <table class=\"table table-hover\" id=\"tblinput\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th width=\"75\"><strong>Presenter Name</strong></th>\r\n                                <th width=\"75\"><strong>Topic Name</strong></th>\r\n                                <th width=\"75\"><strong>Date</strong></th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr>\r\n                            <td>\r\n                                <input type=\"text\" id=\"pname\" placeholder=\"presenter\" /> </td>\r\n                            <td>\r\n                                <input type=\"text\" id=\"tname\" placeholder=\"topic name\" /> </td>\r\n                            <td>\r\n                                <div class='col-sm-9'>\r\n                                    \r\n                                        <div class='input-group date' id='datetimepicker1'>\r\n                                            <input type='text' class=\"form-control\" id=\"pst_date\" />\r\n                                            <span class=\"input-group-addon\">\r\n                        <span class=\"glyphicon glyphicon-calendar\"></span>\r\n                                            </span>\r\n                                        </div>\r\n                                    \r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                            </td>\r\n                            <td>\r\n                            </td>\r\n                            <td>\r\n                                <button id=\"btnadd\">Submit</button>\r\n                                <button id=\"btnclear\">Reset</button>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-1 col-md-1\">\r\n                </div>\r\n                <div class=\"col-sm-8 col-md-8\">\r\n                    <table class=\"table table-hover\" id=\"crud\" >\r\n                        <thead>\r\n                          <tr>\r\n                                <th width=\"\">Presenter</th>\r\n                                <th width=\"\">Topic Name</th>\r\n                                <th width=\"\">Date</th>\r\n                                <th width=\"\">Get Feedback</th>\r\n                                <th width=\"\">Changes</th> \r\n                          </tr>\r\n                       </thead>\r\n\r\n                       <tbody>\r\n                       \r\n                       </tbody>  \r\n                    </table>\r\n                </div>\r\n            </div>\r\n";
},"useData":true});
templates['feedback'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<script id=\"rating-template\" type=\"text/x-handlebars-template\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-1 col-md-1\">\r\n                </div>\r\n                <div class=\"col-sm-8 col-md-8 startup\">\r\n                    <table class=\"table table-bordered\" id=\"feed\">\r\n                        <tr>\r\n                            <th width=\"75\">SSID</th>\r\n                            <th width=\"75\">User</th>\r\n                            <th width=\"75\">Presentation Skills</th>\r\n                            <th width=\"75\">Technical Skills</th>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-1 col-md-1\">\r\n                </div>\r\n                <div class=\"col-sm-10 col-md-10\">\r\n                    <div style=\"height:450px; width:600px\">\r\n                        <canvas id=\"canvas\"></canvas>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </script>";
},"useData":true});
templates['feedbackSub'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n            <td>"
    + alias4(((helper = (helper = helpers.ssid || (depth0 != null ? depth0.ssid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ssid","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = helpers.user || (depth0 != null ? depth0.user : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"user","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = helpers.pskills || (depth0 != null ? depth0.pskills : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pskills","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = helpers.tskills || (depth0 != null ? depth0.tskills : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tskills","hash":{},"data":data}) : helper)))
    + "</td>\r\n        ";
},"useData":true});
templates['home'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container startup\">\r\n                <div class=\"col-sm-2 col-md-2\">\r\n                </div>\r\n                <div class=\"col-sm-8 col-md-8\">\r\n                    \r\n                    <div class=\"jumbotron text-center\">\r\n                        <h4>Welcome to home page</h4>\r\n                        <p>Sign in and add new sessions!</p>\r\n                        <p>\r\n                            <a href=\"/signinn\" class=\"btn btn-default btn-sm\" role=\"button\">\r\n    \r\n                         Sign in!\r\n                           </a>\r\n                        </p>\r\n                    \r\n                          \r\n                    </div>\r\n                   \r\n                </div>\r\n                <div class=\"col-sm-2 col-md-2\">\r\n                </div>\r\n            </div>";
},"useData":true});
templates['profile'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"row\">\r\n                <h2>User Profile Page</h2>\r\n            </div>";
},"useData":true});
templates['ratings'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return " \r\n            <div class=\"row startup\">\r\n                <div class=\"col-sm-2 col-md-2col-lg-2\">\r\n                </div>\r\n                <div>\r\n                    <p style=\"color:red\">***Welcome to Feedback page your ratings must be between 1 to 5 and User Name same as Email</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-1 col-md-1\">\r\n                </div>\r\n                <div class=\"col-sm-8 col-md-8\">\r\n                    <table class=\"table table-bordered\" id=\"tblinput\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th width=\"75\"><strong>Session ID</strong></th>\r\n                                <th width=\"75\"><strong>User Name</strong></th>\r\n                                <th width=\"75\"><strong>Presentation Skills</strong></th>\r\n                                <th width=\"75\"><strong>Technical Skills</strong></th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tr>\r\n                            <td>\r\n                                <input type=\"text\" id=\"ssid\" placeholder=\"topic name\" /> </td>\r\n                            <td>\r\n                                <input type=\"text\" id=\"uname\" placeholder=\"User Name\" /> </td>\r\n                            <td>\r\n                                <input type=\"text\" id=\"pskills\" placeholder=\"Presentaion Skills\" /> </td>\r\n                            <td>\r\n                                <input type=\"text\" id=\"tskills\" placeholder=\"Technical Skills\" /> </td>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                            </td>\r\n                            <td>\r\n                            </td>\r\n                            <td>\r\n                            </td>\r\n                            <td>\r\n                                <button id=\"btnadd\">Submit</button>\r\n                                <button id=\"btnclear\">Reset</button>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-3 col-md-3 col-lg-3\">\r\n                </div>\r\n                <div id=\"thanks\">\r\n                </div>\r\n            </div>\r\n        ";
},"useData":true});
templates['register'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\r\n            <div class=\"row signin\">\r\n                <div class=\"col-sm-4 col-md-4\">\r\n                </div>\r\n                <div class=\"col-sm-3 col-md-3 formb\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"user name\">User name</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Enter email\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"exampleInputPassword1\">Password</label>\r\n                        <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\">\r\n                    </div>\r\n                    <button type=\"button\" class=\"btn btn-default\" id=\"signup\">Register</button>\r\n                    <a href=\"/signinn\" title=\"signin\"> signin </a>\r\n                </div>\r\n            </div>\r\n        ";
},"useData":true});
templates['sessions'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return " \r\n            <div class=\"container startup\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-1 col-md-1\">\r\n                    </div>\r\n                    <div class=\"col-sm-8 col-md-8\">\r\n                        <div id=\"titlee\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-1 col-md-1\">\r\n\r\n                    </div>\r\n                   \r\n                        <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n                            <div id=\"thanks\">\r\n                            </div>\r\n                        </div>\r\n                \r\n                </div>\r\n               \r\n\r\n                <div class=\"row startup\">\r\n                    <div class=\"col-sm-1 col-md-1\">\r\n\r\n                    </div>\r\n                    <div class=\"col-sm-4 col-md-4 sessionid\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-5 col-md-5 table-scroll\">\r\n                                <h5>Participants List</h5>\r\n                                <table class=\"table table-hover\" id=\"feed\">\r\n                                    <tr>\r\n                                        <th>Names</th>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                        </div>\r\n                        <!-- Modal -->\r\n                        <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n                            <div class=\"modal-dialog\">\r\n                                <!-- Modal content-->\r\n                                <div class=\"modal-content\">\r\n                                    <div class=\"modal-header\">\r\n                                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                                        <h4 class=\"modal-title\">Add Participants</h4>\r\n                                    </div>\r\n                                    <div class=\"modal-body\">\r\n                                        <table class=\"table table-hover\" id=\"tblinput\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th width=\"75\"><strong>Participant Name</strong></th>\r\n                                                    <th width=\"75\"><strong>Email</strong></th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <input type=\"text\" id=\"partc_name\" placeholder=\"presenter\" /> </td>\r\n                                                <td>\r\n                                                    <input type=\"text\" id=\"email\" placeholder=\"email\" /> </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <button id=\"nusebtn\" data-dismiss=\"modal\">Submitt</button>\r\n                                                    <button id=\"btnclear\">Reset</button>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"myModal3\" class=\"modal fade\" role=\"dialog\">\r\n                            <div class=\"modal-dialog\">\r\n                                <!-- Modal content-->\r\n                                <div class=\"modal-content\">\r\n                                    <div class=\"modal-header\">\r\n                                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                                        <h4 class=\"modal-title\">Add Participants in Team</h4>\r\n                                    </div>\r\n                                    <div class=\"modal-body\">\r\n                                        <table class=\"table table-hover\" id=\"tblinput\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th><strong>Participant Name</strong></th>\r\n                                                    <th><strong>Email</strong></th>\r\n                                                    <th><strong>Select Team</strong></th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <input type=\"text\" id=\"partc_name\" placeholder=\"participants\" /> </td>\r\n                                                <td>\r\n                                                    <input type=\"text\" id=\"email\" placeholder=\"email\" /> </td>\r\n\r\n                                                    <td>\r\n                                    \r\n                                    <select class=\"form-control\">\r\n                                                <option value=\"one\">UI</option>\r\n                                                <option value=\"two\">JAVA</option>\r\n                                                <option value=\"three\">TESTING</option>\r\n                                                <option value=\"four\">SST</option>\r\n                                                <option value=\"five\">PAT</option>\r\n                                            </select>\r\n                                            \r\n                                    </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>\r\n                                                </td>\r\n                                                <td >\r\n                                                    <button id=\"nusebtn\" data-dismiss=\"modal\" class=\"btn-default pull-right\">Add New</button>\r\n                                                    \r\n                                                    </td>\r\n                                                    \r\n                                                    <td>\r\n                                                    <button id=\"btnclear\" class=\"btn-default\">Send Mail</button>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div id=\"addrmv\">\r\n                            <button type=\"button\" class=\"btn btn-default btn-md\" data-toggle=\"modal\" data-target=\"#myModal3\">Group Mail</button>\r\n                            <button type=\"button\" class=\"btn btn-custom btn-md\" data-toggle=\"modal\" data-target=\"#myModal\">Add New</button>\r\n                            <button type=\"button\" class=\"btn btn-default btn-md emailbtn\">Send Mail</button>\r\n                        </div>\r\n                        <span id=\"message\"></span>\r\n                    </div>\r\n                    <div class=\"col-sm-1 col-md-1\">\r\n                    </div>\r\n                    <div class=\"col-sm-5 col-md-5\">\r\n                        <div class=\"row\">\r\n                            <h5>Feedback</h5>\r\n                            <div class=\"col-sm-10 col-md-10\">\r\n                                <div style=\"height:450px; width:600px\">\r\n                                    <canvas id=\"canvas\"></canvas>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                </div>\r\n            </div>\r\n        ";
},"useData":true});
templates['sessionsSub'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n            <td>"
    + alias4(((helper = (helper = helpers.partc_name || (depth0 != null ? depth0.partc_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"partc_name","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data}) : helper)))
    + "</td>\r\n\r\n            \r\n       ";
},"useData":true});
templates['signin'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"row signin\" id=\"signinnn\">\r\n                <div class=\"col-sm-4 col-md-4\">\r\n                </div>\r\n                <div class=\"col-sm-3 col-md-3 formb\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Enter email\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\">\r\n                    </div>\r\n                    <button type=\"button\" class=\"btn btn-default\" id=\"login\">signin</button>\r\n                    <a href=\"/signup\" title=\"register\"> signup </a>\r\n                </div>\r\n            </div>";
},"useData":true});
templates['technologies'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\r\n            <div class=\"row\" style=\"text-align: center\">\r\n                <h2>Requests and Suggestions</h2>\r\n            </div>\r\n        ";
},"useData":true});
templates['userSub'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n            <td>"
    + alias4(((helper = (helper = helpers.tname || (depth0 != null ? depth0.tname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tname","hash":{},"data":data}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = helpers.pst_date || (depth0 != null ? depth0.pst_date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pst_date","hash":{},"data":data}) : helper)))
    + "</td>\r\n            \r\n            <td><a href=\"sessionss/"
    + alias4(((helper = (helper = helpers.ssid || (depth0 != null ? depth0.ssid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ssid","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-custom btn-sm active\" role=\"button\">View Details</a></td>\r\n       ";
},"useData":true});
templates['userView'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return " \r\n            <div class=\"container startup\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-2 col-md-2\">\r\n                    </div>\r\n                    <div class=\"col-sm-2 col-md-2\">\r\n                        <h4 id=\"presenter\" value=\"hello\"></h4>\r\n                    </div>\r\n                    <div class=\"col-sm-1 col-md-1\">\r\n                    </div>\r\n                    <div class=\"col-sm-4 col-md-4\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row startup\">\r\n                    <div class=\"col-sm-2 col-md-2\">\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-6\">\r\n                        <table class=\"table table-hover\" id=\"crud\">\r\n                            <tr>\r\n                                <th>Topic Name</th>\r\n                                <th>Date</th>\r\n                                <th>Get Details</th>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6 col-md-6\">\r\n                    </div>\r\n                    <div class=\"col-sm-4 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-info btn-sm btnadd\" data-toggle=\"modal\" data-target=\"#myModal1\">Add New</button>\r\n                        <!-- Modal -->\r\n                        <div class=\"modal fade modal-admin\" id=\"myModal1\" role=\"dialog\">\r\n                            <div class=\"modal-dialog\">\r\n                                <!-- Modal content-->\r\n                                <div class=\"modal-content\">\r\n                                    <div class=\"modal-header\">\r\n                                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                                        <h4 class=\"modal-title\">Add New Session</h4>\r\n                                    </div>\r\n                                    <div class=\"modal-body\">\r\n                                        <table class=\"table table-hover\" id=\"tblinput\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th>Topic Name</th>\r\n                                                    <th>Date</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <input type=\"text\" id=\"tname\" placeholder=\"topic name\" /> </td>\r\n                                                <td>\r\n                                                    <div class='col-sm-9'>\r\n                                                        <div class=\"form-group\">\r\n                                                            <div class='input-group date' id='datetimepicker1'>\r\n                                                                <input type='text' class=\"form-control\" id=\"pst_date\" />\r\n                                                                <span class=\"input-group-addon\">\r\n                        <span class=\"glyphicon glyphicon-calendar\"></span>\r\n                                                                </span>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <button id=\"btnadd\" data-dismiss=\"modal\">Submit</button>\r\n                                                    <button id=\"btnclear\">Reset</button>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        ";
},"useData":true});
return templates;
});