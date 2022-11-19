var mainCity = document.querySelector(".main-city")
var mainTemp = document.querySelector(".main-temp")
var mainWind = document.querySelector(".main-wind")

var city;
var APIKey = "a34f5a1c0ef356aeb1d2cd623581eea0";

function getAPI() {

  // var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
  
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Washington" + "&units=metric&appid=" + APIKey;

  fetch(queryURL)
    .then(function (response) {
      return response.json();

    })
    .then(function (data) {
      console.log(data);

     
 
    var listItem = document.createElement("div");
    listItem.textContent = "City: " + data.name;
    mainCity.appendChild(listItem);

    var listItem = document.createElement("div");
    listItem.textContent = "Temperature: " + data.main.temp;
    mainTemp.appendChild(listItem);

    var listItem = document.createElement("div");
    listItem.textContent = "Wind: " + data.wind.speed;
    mainWind.appendChild(listItem);
  
  function search() {
    this.fetch(document.querySelector(".search").value);
    console.log("hello");
  }
});
}

getAPI();
document.querySelector(".search").addEventListener("click", function() {
  search();
})

// btn.addEventListener("click", getAPI);