define(function(){

	return {
	userName: {
      required: true,
      minCharacters : 6,
      maxCharacters : 25,
      alphaNumericPerid : false
    },

    firstname:{
      required:true
    },

    lastname:{
      required : true,

    },
    userEmail: {
      required: true,
      email:true
    },
    location: {
      required: true
    },
    address: {
      required: true
    },
    passport: {
      checkbox: true
    },
    gender : {
      radio : true
    },
    password : {
    	required: true
    }
	};

});
	