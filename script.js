

var weatherFormEl = $('#weather-form');

/*var placeToAdd = document.getElementById("place");
var input1 = document.createElement("button");
input1.textContent = "Hello friends";

 input1.className = 'buttonSize';
placeToAdd.appendChild(input1);
*/

// create function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  var saveID = $( this ).attr("id");


            //displaying dates 
var todaysDate = moment().format("[(]M[/]D[/]YYYY[)]");
var daysAhead1 = moment().add(1, 'day').format("[(]M[/]D[/]YYYY[)]");
var daysAhead2 = moment().add(2, 'day').format("[(]M[/]D[/]YYYY[)]");
var daysAhead3 = moment().add(3, 'day').format("[(]M[/]D[/]YYYY[)]");
var daysAhead4 = moment().add(4, 'day').format("[(]M[/]D[/]YYYY[)]");
var daysAhead5 = moment().add(5, 'day').format("[(]M[/]D[/]YYYY[)]");

$("#card1").text(daysAhead1);
$("#card2").text(daysAhead2);
$("#card3").text(daysAhead3);
$("#card4").text(daysAhead4);
$("#card5").text(daysAhead5);

  
var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?APPID=21c7cd84abdc85f2925013bde640e844&units=imperial';

var searchCity =document.getElementById ("searchId").value;

var searchUrl=requestUrl + "&q=" + searchCity + ",us";

//Browser XMLHttpRequest, built in the browser and require more code.
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response);
      // do something with jsonResponse
      var jsonResponse = JSON.parse(xhr.responseText);
      //alert(jsonResponse.sys.dt_txt);      
      //return;
      
      document.getElementById("city").innerHTML=jsonResponse.name + " " + todaysDate;      
      var str="Temperature: " + jsonResponse.main.temp;
      document.getElementById("current_temp").innerHTML= str;
      var str="Humidity: " + jsonResponse.main.humidity;
      document.getElementById("current_hum").innerHTML= str;
      var str="Wind MPH: " + jsonResponse.wind.speed;
      document.getElementById("current_wind").innerHTML= str;
      

      // document.getElementById("card1").innerHTML=jsonResponse.weather[0].description;      
      // document.getElementById("card2").innerHTML=jsonResponse.coord.lon;
      // document.getElementById("card3").innerHTML=jsonResponse.main.temp;

  }
  //else {alert("not city");return;}
   
};
xhr.open('GET', searchUrl);
xhr.send();

/*var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?APPID=21c7cd84abdc85f2925013bde640e844&units=imperial';

var searchCity =document.getElementById ("searchId").value;
alert(searchCity);
var searchUrl2=requestUrl + "&q=" + searchCity + ",us";
alert(searchUrl2);

//Browser XMLHttpRequest, built in the browser and require more code.
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response);
      // do something with jsonResponse
      var jsonResponse = JSON.stringify(xhr.responseText);
      //alert(jsonResponse.sys.dt_txt);      
      //return;
      //alert(jsonResponse.city.name);
      $("#card1").text(jsonResponse.list.dt);

     }
};
xhr.open('GET', searchUrl2);
xhr.send();
*/
 //creating buttons for previous searches
 var placeToAdd = document.getElementById("place");
 var input1 = document.createElement("button");
 input1.textContent = searchCity;
 input1.className = 'buttonSize';
 

var attribute = document.createAttribute('id')
attribute.value = searchCity
input1.setAttributeNode(attribute)
 placeToAdd.appendChild(input1);
 
}
// select form element by its `name` attribute and get its value

 //creating buttons for previous searches
 
weatherFormEl.on('click', handleFormSubmit);

  // if there's nothing in the form entered, don't print to the page
  //if (!shoppingItem) {
    //console.log('No shopping item filled out in form!');
    //return;
  //}
//alert("test of form js");
//var str="string test";
//document.getElementById("card1").innerHTML= str;  


// print to the page
  //shoppingListEl.append('<li>' + shoppingItem + '</li>');

  // clear the form input element
  //$('input[name="shopping-input"]').val('');

  
// Create a submit event listener on the form element
