// script for slideshow on homepage

var myImage = document.getElementById("myPhoto");

var imageArray = ["images/slideshow2/stairs2.jpg", "images/slideshow2/stairs3.jpg", "images/slideshow2/stairs2.jpg", 
"images/slideshow2/stairs3.jpg", "images/slideshow2/stairs2.jpg", "images/slideshow2/stairs3.jpg", "images/slideshow2/stairs2.jpg", "images/slideshow2/stairs4.jpg", 
"images/slideshow2/stairs5.jpg", "images/slideshow2/stairs6.jpg", "images/slideshow2/stairs7.jpg", "images/slideshow2/stairs8.jpg", "images/slideshow2/stairs9.jpg",
"images/slideshow2/stairs10.jpg","images/slideshow2/stairs11.jpg", "images/slideshow2/stairs12.jpg", "images/slideshow2/stairs13.jpg", "images/slideshow2/stairs14.jpg",
"images/slideshow2/stairs15.jpg", "images/slideshow2/stairs16.jpg", "images/slideshow2/stairs17.jpg", "images/slideshow2/stairs18.jpg", "images/slideshow2/stairs19.jpg",
"images/slideshow2/stairs20.jpg", "images/slideshow2/stairs21.jpg", "images/slideshow2/stairs22.jpg", "images/slideshow2/stairs23.jpg", "images/slideshow2/stairs24.jpg",
"images/slideshow2/stairs3.jpg", "images/slideshow2/stairs2.jpg"];

var imgIndex = 0;


function nextImage(){


	myPhoto.setAttribute("src", imageArray[imgIndex]);
	imgIndex++;

	if (imgIndex >= imageArray.length){
		imgIndex = 0;
	}
}

var myInterval = setInterval(nextImage, 1500);

// function stopSlideshow(){
// 	clearInterval(myInterval); //stops on click (not used)
// }



// Script for Photo Gallery Slideshow

var myImage1 = document.getElementById("myPhoto1");

var imageArray1 = ["./images/slideshow/image2.jpg", "./images/slideshow/image3.jpg", "./images/slideshow/image4.jpg", "./images/slideshow/image5.jpg", "./images/slideshow/image6.jpg", ];

var imgIndex1 = 0;

function nextImage1(){


	myPhoto1.setAttribute("src", imageArray1[imgIndex1]);
	imgIndex1++;

	if (imgIndex1 >= imageArray1.length){
		imgIndex1 = 0;
	}
}

var myInterval1 = setInterval(nextImage1, 3500);

// function stopSlideshow1(){
// 	clearInterval(myInterval1);  //stops slideshow
// }



// script to show slideshow text on hover

function showCaption(){
	document.getElementById("photocaption").style.visibility = "visible";
}

function hideCaption(){
	document.getElementById("photocaption").style.visibility = "hidden";
}


// script to hover images on homepage

function hoverOn(image) {
    
    if (image.src.match("./images/buytickets.png")) {
        image.src = "./images/buytickets2.png";
    } 
    else if (image.src.match("./images/home.png")) {
        image.src = "./images/home2.png";
    }
    else if (image.src.match("./images/seegallery2.jpg")) {
        image.src = "./images/seegallery1.jpg";
    }
    else if (image.src.match("./images/lee.jpg")) {
        image.src = "./images/lee2.jpg";
    }

    else if (image.src.match("./images/jen.jpg")) {
        image.src = "./images/jen2.jpg";
    }

    else if (image.src.match("./images/kathleen.jpg")) {
        image.src = "./images/kathleen2.jpg";
    }

    else if (image.src.match("./images/shane.jpg")) {
        image.src = "./images/shane2.jpg";
    }

    else if (image.src.match("./images/history1.png")) {
        image.src = "./images/history2.png";
    }


}

function hoverOff(image) {
	
	if (image.src.match("./images/buytickets2.png")){
		image.src = "./images/buytickets.png";
	}

	else if (image.src.match("./images/home2.png")) {
        image.src = "./images/home.png";
    }

    else if (image.src.match("./images/seegallery1.jpg")) {
        image.src = "./images/seegallery2.jpg";
    }

    else if (image.src.match("./images/lee2.jpg")) {
        image.src = "./images/lee.jpg";
    }

    else if (image.src.match("./images/jen2.jpg")) {
        image.src = "./images/jen.jpg";
    }

    else if (image.src.match("./images/kathleen2.jpg")) {
        image.src = "./images/kathleen.jpg";
    }

    else if (image.src.match("./images/shane2.jpg")) {
        image.src = "./images/shane.jpg";
    }

    else if (image.src.match("./images/history2.png")) {
        image.src = "./images/history1.png";
    }
}

// script to open window to purchase tickets 
function buyTickets() {
	window.open("buytickets.html", "ticketswindow", "width=600, height=400");
}

// script to submit payment details
function submitPayment(card, cardholder, email, tickets) {

	// FIRST PART VALIDATES VALUES -----------
	var atPos = email.indexOf("@");
	var fullstopPos = email.indexOf(".");


	if((cardholder.length == 0) || (cardholder == null)){ //validate name on card
		alert("Please enter a cardholder name.");
	}

	else if ((card.length == 0) || (card == null)) { // validate cardnumber
		alert("Please enter a valid card number.");
	}

	else if((email.length == 0) || (email == null)){ // validate email not empty
		alert("Please enter an email address.");
	}

	else if (atPos<1 || fullstopPos<2){ // validate email has a "@" and '.'
		alert("Invalid Email address. Please enter a valid email address.");
	}


	//-------- SECOND PART PRINTS DETAILS -----------

	else {
	    document.write("<h3>Thanks for your payment.</h3>");
	    document.write("<p> An email has been sent to you at: " + email + " confirming your purchase.</p>");
	    

	    var total = 0;

	    if (tickets == "adult"){
	    	total = 10;
	    }

	    else if (tickets == "senior"){
	    	total = 7;
	    }

	    else if (tickets == "student"){
	    	total = 6;
	    }

	    else if (tickets == "child"){
	    	total = 5;
	    }

	    else if (tickets == "family1"){
	    	total = 25;
	    }
	    else if(tickets == "family2"){
	    	total = 30;
	    }
	    
		document.writeln("You have purchased one: " + tickets + " ticket.");
	    document.writeln("Order total: €" + total);

	    document.writeln("<br>");

	    document.writeln("<h4>Your card details:</h4>");
	    document.writeln("<p>Card: " + card +"</p>");
	    document.writeln("<p>Cardholder: " + cardholder + "</p>");
	    document.writeln("<h4>Please message us at thisisafakeemailaddress@loftushall.ie if there are any issues with your order.");
	}

}


// function previewMessage(name, email, message){
// 	document.writeln("<p>Name:" + name + "</p>");
// 	document.writeln("<p>Email: " + email + "</p>");
// 	document.writeln("<p>Your message: <p>");
// 	document.writeln(message);

// }


function previewMessage(email, firstname, lastname, phone, message){
	if (message == "" || message == null){
		alert("You didn't write a message.");
	}

	else {
		var previewwindow = window.open("", "previewmessagewindow", "width=600, height=400");
		previewwindow.document.writeln("<p><strong>First name: </strong>" + firstname + "</p>");
		previewwindow.document.writeln("<p><strong>Last name: </strong>" + lastname + "</p>");
		previewwindow.document.writeln("<p><strong>Email: </strong>" + email + "</p>");
		previewwindow.document.writeln("<p><strong>Telephone: </strong>" + phone + "</p>");
		previewwindow.document.writeln("<p><strong>Message: </strong></p>");
		previewwindow.document.writeln(message);
	}
}
