/* 
 * This is my registration form rules
 */


$().ready(function() {
	

	// validate signup form on keyup and submit
	$("#signupForm").validate({
		rules: {
//			firstname: "required",
//			lastname: "required",
			
			password: {
				required: true,
				minlength: 8
			},
			confirm_password: {
				required: true,
				minlength: 8,
				equalTo: "#password"
			},
			email: {
				required: true,
				email: true
			}
                        
                },
		messages: {
			firstname: "Please enter your firstname",
			lastname: "Please enter your lastname",
//			username: {
//				required: "Please enter a username",
//				minlength: "Your username must consist of at least 2 characters"
//			},
			password: {
				required: "Please provide a password",
				minlength: "Your password must be at least 8 characters long"
			},
			confirm_password: {
				required: "Please provide a password",
				minlength: "Your password must be at least 5 characters long",
				equalTo: "Please enter the same password as above"
			},
			email: "Please enter a valid email address"
//			agree: "Please accept our policy"
		}
	});

	
	
});