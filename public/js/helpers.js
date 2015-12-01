define(['handlebars.runtime'], function (Handlebars) {
	console.log(Handlebars);
  Handlebars.registerHelper("formatDate", function(date){
  	console.log(date);
  	
  	var dateobj= new Date(date);
  	console.log(dateobj)
  	 if (typeof(date) == "undefined") {
        return "Unknown";
        console.log("something form helpersjs");
      }
      // These methods need to return a String
      console.log("something form helpersjssssss");
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