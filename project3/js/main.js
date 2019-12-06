// Initialize and add the map
function initMap() {
 // The location of Uluru


var test = document.getElementById("locality-dropdown");
var result = test.options[test.selectedIndex].value;

if(result == "Crispy tarantulas"){
	var uluru = {lat: 12.5657, lng: 104.9910};
}
else if(result == "Century egg"){
	var uluru = {lat: 35.8617, lng: 104.1954};
}
else if(result == "Stargazey Pie"){
	var uluru = {lat: 52.3555, lng: 1.1743};
}
else if(result == "Huitlacoche"){
	var uluru = {lat: 19.4326, lng: 99.1332};
}
else if(result == "Balut"){
	var uluru = {lat: 14.5995, lng: 120.9842};
}
else{
	//navigator.geolocation.getCurrentPosition(showPosition);

	var uluru = {lat: 56.1304, lng: 106.3468};
}
//var value = test[test.selectedIndex].value;
console.log("test: "+test);

// The map, centered at Uluru
var map = new google.maps.Map(
document.getElementById('map'), {zoom: 4, center: uluru});
// The marker, positioned at Uluru
var marker = new google.maps.Marker({position: uluru, map: map});

}

// JavaScript Document

//Step One - create variables that store a reference to header and section elements 
let header = document.querySelector('header');
let section = document.querySelector('section');

//Step Two - create a variable to store request URL 
let requestURL = " https://ffuentebella13.github.io/JSON/soWeirdJson.json";
	
// Step Three - create a new XHR object 
let request = new XMLHttpRequest(); 

//Step Four - open a new request, using the open method 
request.open('GET', requestURL);

//Step Five - set up the request to accept JSON

request.responseType = 'json';

//Step Six - send the request using the send method 

request.send();


// Step Seven - adding an event handler that listens for onload event of the JSON file/object 
request.onload = function() {
  let SooWeird = request.response; 
  console.log(SooWeird);
  populateHeader(SooWeird); 
  topFlavours(SooWeird);  
  

}

// Step Eight - set up populateHeader function to fill in the header function 
function populateHeader(jsonObj) {
  
  // grab the company name from JSON object and then create a new element, adding text and appending to the header
  
  let headerH1 = document.createElement('h1'); 
  headerH1.textContent = jsonObj['companyName'];
  header.appendChild(headerH1);
  
  let headerH2 = document.createElement('h5'); 
  headerH2.textContent = "By "+jsonObj['founded'];
  header.appendChild(headerH2);
  
  //grab the company info and established date and add a new paragraph to your HTML that displays this info 
  
  /* let headerPara = document.createElement('p');
  headerPara.textContent = 'Started in ' + jsonObj['headOffice'] + ' Since ' + jsonObj['established'];
  header.appendChild(headerPara);
  */
}

// define the topFlavours function to show the flavours

function topFlavours(jsonObj) {
  
  //bind top flavours object to a variables 
  let topFlavours = jsonObj['topFlavours'];
  
  
  	let dropdown = document.getElementById('locality-dropdown');
	dropdown.length = 0;

	let defaultOption = document.createElement('option');
	defaultOption.text = 'Find Locations';

	dropdown.add(defaultOption);
	dropdown.selectedIndex = 0;
	
	
  for (let i = 0; i < topFlavours.length; i++) {
    //create a few different elements 
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let p1 = document.createElement('h3');
    let p2 = document.createElement('p');
	let p3 = document.createElement('h4');

	
    option = document.createElement('option');
	
    option.text = topFlavours[i].name;
    option.value = topFlavours[i].name;
	
    dropdown.add(option);

    //grab the data associated with image to set the src and alt attribute
    img.setAttribute('src', 'images/' + topFlavours[i].image);
    img.setAttribute('alt', topFlavours[i].image );
    
    h2.textContent = topFlavours[i].name; 
    p1.textContent = 'Price: ' + topFlavours[i].price;
    p2.textContent = 'Description: ' + topFlavours[i].description;
	p3.textContent = 'Deals: ' + topFlavours[i].deals;
    
 
    
    // Append each element to article, then append article to section 
    
    article.appendChild(img); 
    article.appendChild(h2);
    article.appendChild(p1); 
    article.appendChild(p2);
	article.appendChild(p3);

    section.appendChild(article); 
     
  }

}

