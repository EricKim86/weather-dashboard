var input = document.querySelector(".input")
var userSearch = document.querySelector(".searchbar")

var city = []
  if (city) {
    city.length === 0;
    city.push("philadelphia");
  } else {}

var APIKey = "a34f5a1c0ef356aeb1d2cd623581eea0";

function weather() {
  
//search city function
userSearch.addEventListener("click", searchCity)

function searchCity () {
   console.log(input.value);
   var cityInput = input.value;
   alert(input.value);

//saving and display city searches
localStorage.setItem("cityRecall", JSON.stringify(cityInput));
}
  
  var url = ("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + APIKey)

  fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  
// primary display - using jquery to target index.html to eliminate the need to create multiple variables

var listItem = document.createElement("div");
listItem.textContent = data.name;
$(".main-city").append(listItem);

var listItem = document.createElement("div");
listItem.textContent = "Temperature: " + data.main.temp + "°C";
$(".main-temp").append(listItem);

var listItem = document.createElement("div");
listItem.textContent = "Wind: " + data.wind.speed + " mph";
$(".main-wind").append(listItem);

var listItem = document.createElement("div");
listItem.textContent = "Humidity: " + data.main.humidity + "%";
$(".main-humidity").append(listItem);

//5-day forecast display Day #1
var listItem = document.createElement("div");
listItem.textContent = "Temperature: " + data.main.temp + "°C";
$(".box1B").append(listItem);

var listItem = document.createElement("div");
listItem.textContent = "Wind: " + data.wind.speed + " mph";
$(".box1C").append(listItem);

var listItem = document.createElement("div");
listItem.textContent = "Humidity: " + data.main.humidity + "%";
$(".box1D").append(listItem);

//5-day forecast display Day #2
var listItem = document.createElement("div");
listItem.textContent = "Temperature: " + data.main.temp + "°C";
$(".box2B").append(listItem);

var listItem = document.createElement("div");
listItem.textContent = "Wind: " + data.wind.speed + " mph";
$(".box2C").append(listItem);

var listItem = document.createElement("div");
listItem.textContent = "Humidity: " + data.main.humidity + "%";
$(".box2D").append(listItem);

//5-day forecast display Day #3
var listItem = document.createElement("div");
listItem.textContent = "Temperature: " + data.main.temp + "°C";
$(".box3B").append(listItem);

var listItem = document.createElement("div");
listItem.textContent = "Wind: " + data.wind.speed + " mph";
$(".box3C").append(listItem);

var listItem = document.createElement("div");
listItem.textContent = "Humidity: " + data.main.humidity + "%";
$(".box3D").append(listItem);

//5-day forecast display Day #4
var listItem = document.createElement("div");
listItem.textContent = "Temperature: " + data.main.temp + "°C";
$(".box4B").append(listItem);

var listItem = document.createElement("div");
listItem.textContent = "Wind: " + data.wind.speed + " mph";
$(".box4C").append(listItem);

var listItem = document.createElement("div");
listItem.textContent = "Humidity: " + data.main.humidity + "%";
$(".box4D").append(listItem);

//5-day forecast display Day #5
var listItem = document.createElement("div");
listItem.textContent = "Temperature: " + data.main.temp + "°C";
$(".box5B").append(listItem);

var listItem = document.createElement("div");
listItem.textContent = "Wind: " + data.wind.speed + " mph";
$(".box5C").append(listItem);

var listItem = document.createElement("div");
listItem.textContent = "Humidity: " + data.main.humidity + "%";
$(".box5D").append(listItem);

//date and time using jquery
var date = dayjs();
$(".main-date").text(date.format("(MM/D/YYYY)"));

var date1 = dayjs().add(1,"days");
$(".box1A").text(date1.format("MM/D/YYYY"));

var date2 = dayjs().add(2,"days");
$(".box2A").text(date2.format("MM/D/YYYY"));

var date3 = dayjs().add(3,"days");
$(".box3A").text(date3.format("MM/D/YYYY"));

var date4 = dayjs().add(4,"days");
$(".box4A").text(date4.format("MM/D/YYYY"));

var date5 = dayjs().add(5,"days");
$(".box5A").text(date5.format("MM/D/YYYY"));

})
}

weather();