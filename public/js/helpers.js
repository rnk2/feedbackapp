define(['handlebars'], function (Handlebars) {

  Handlebars.registerHelper("formatDate", function(date){
  	
  	var dateobj= new Date(date);
  	 if (typeof(date) == "undefined") {
        return "Unknown";
      }
      // These methods need to return a String
      var datem = dateobj.getMonth()+1; 
      // var hours = dateobj.getHours();
      var hours = dateobj.getHours() > 12 ? dateobj.getHours() - 12 : dateobj.getHours();
      var am_pm = dateobj.getHours() >= 12 ? "PM" : "AM";
      hours = hours < 10 ? "0" + hours : hours;
      var minutes = dateobj.getMinutes() < 10 ? "0" + dateobj.getMinutes() : dateobj.getMinutes();
      var seconds = dateobj.getSeconds() < 10 ? "0" + dateobj.getSeconds() : dateobj.getSeconds();

      time = hours + ":" + minutes + ":" + seconds + " " + am_pm;
      return dateobj.getDate() + "-" + datem + "-" + dateobj.getFullYear()+"  "+time;


  	});
});