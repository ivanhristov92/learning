// JavaScript Document

//////// SLIDESHOW FUNCTIONALITY SECTION
////////////////////////////////////////


var images = ["https://avatars2.githubusercontent.com/u/5191402?v=3&s=96", "https://avatars1.githubusercontent.com/u/1903774?v=3&s=96", "https://avatars2.githubusercontent.com/u/5384645?v=3&s=96", 
"https://worldofgoo.com/images/t_title.gif",
"https://lh3.ggpht.com/KToXzXZ774Tp-mkUai_1XtJq5d9L-Wd36m0tQoIz3n4bdB42zowqnSK-W9fB59lMHao=w300"];


var wrapperOne = document.getElementById('wrapperOne');
var wrapperTwo = document.getElementById('wrapperTwo');


// Variables to be used inside functions
var i = 0;
var url = "url('" + images[i] + "')";


//Supporting function for "changeBackground()"
var changeURL = function (i) {
	url = "url('" + images[i] + "')";
}


//Function to be used inside of the main function
var changeBackground = function (element, i) {
	changeURL(i); //image array index
	element.style.backgroundImage= url;
	element.style.backgroundSize="cover";	
}


//Function to be used inside of the main function
var show = function (element) {
	element.setAttribute('class', 'visible');
}

//Function to be used inside of the main function
var hide = function (element) {
	element.setAttribute('class', 'hidden');
}



//Main Function
var slideShow = function () {
	
	if ( i === images.length - 1 ) { //When the loop reaches the last pic, do this:
		
		// - select which wrapper it is appropriate to show, considering the classes of the two wrappers
		if (wrapperOne.getAttribute('class') === 'visible'){
			hide(wrapperOne);
			show (wrapperTwo);
			changeBackground(wrapperTwo, i);
			
		} else {
			hide (wrapperTwo);
			show (wrapperOne);
			changeBackground(wrapperOne, i);
		}
		i = 0; // - after displaying the current image, bring the the index value back to zero to prepare for showing the first image and start the slideshow over.
	
		
	} else { // If the loop has not yet reached the last pic, do the following:
		
		// - select which wrapper it is appropriate to show, considering the classes of the two wrappers
		if (wrapperOne.getAttribute('class') === 'visible'){
			hide(wrapperOne);
			show (wrapperTwo);
			changeBackground(wrapperTwo, i);
			
		} else {
			hide (wrapperTwo);
			show (wrapperOne);
			changeBackground(wrapperOne, i);
		}
		i++; // - after displaying the current image, increase the index value by one point to prepare for showing the next image and continue the slideshow.
	}
	setTimeout(slideShow, 5000); // Set the frequency of the main function to determine how long the images should display before they change
}

slideShow(); // Call the main function to activate it


//////// END of the "Slideshow Functionality" section
/////////////////////////////////////////////////////





//////// MUSIC PLAYER FUNCTIONALITY SECTION
///////////////////////////////////////////

var frame = document.getElementById('frame');
var player = document.getElementById('player');


//Function to be used insed the main function
var showPlayer = function () {
	player.classList.remove('hidden');
}

//Function to be used insed the main function
var hidePlayer = function () {
	player.classList.toggle('hidden');
}

//Adding the show-hide effect to the player control bar
frame.addEventListener('mouseover', showPlayer);
frame.addEventListener('mouseout', hidePlayer);


//Experimenting with the input range element
var range = document.getElementById('range');
var myAudio = document.getElementById('myAudio');


var setAttribute = function(element, attribute, value) {
	element.setAttribute(attribute, value);
}


var updateVolume = function () {
	console.log(range.value);
	myAudio.volume = range.value;
}


//range.addEventListener('change', updateVolume());

