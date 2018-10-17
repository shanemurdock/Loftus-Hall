function validateForm(firstname, lastname, email, message, phone) {
			    var x = document.forms["myForm"]["email"].value;
			    var atpos = x.indexOf("@");
			    var dotpos = x.lastIndexOf(".");
			    
				if(firstname == "" || firstname == null){
			   		alert("Please fill in your first name.");
			   } 

			    else if(lastname == "" || lastname==null){
			   		alert("Please fill in last name. ");
			   }

			    else if(email == "" || email == null){
			   		alert("Please fill in email address.");
			   }

			    else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
			        alert("Not a valid e-mail address.");
			    }

			    else if(message == "" || message == null){
			   		alert("Please explain the reason you want us to contact you.");
			   }

			    else if( phone == "" || phone == null){
			        alert("Please enter a phone number.")
			    } 

			    else {
			        alert("Thank you for your message. We will get back to you at (" + email + ") as soon as possible.");
			    }			   
}


