var input = document.querySelector(".input")
var userSearch = document.querySelector(".searchbar")
var clear = document.querySelector(".clear-search")
var APIKey = "a34f5a1c0ef356aeb1d2cd623581eea0";
var searchResults = document.querySelector(".search-results")
var city = []

function weather() {

//search city function
userSearch.addEventListener("click", searchCity);
clear.addEventListener("click", clearSearch);

//clear search results
function clearSearch () {
  localStorage.clear();
  location.reload();
}

function searchCity (event) {
   event.preventDefault()
   city.pop();
   var cityInput = input.value;
   city.push(cityInput);

//clear fields after search
$(".clear").text("");

//recall search items
var searchDisplay = JSON.parse(localStorage.getItem("cityRecall")) || [];
if (searchDisplay !== null) {
  cityReall = searchDisplay;
  searchResults.textContent = "";
}

//saving and display city searches
searchDisplay.push(input.value);
localStorage.setItem("cityRecall", JSON.stringify(searchDisplay));
input.value = "";

//populating saved searches for user
for (var i = 0; i < searchDisplay.length; i++) {
  var cityGen = searchDisplay[i];
  var btnGen = document.createElement("button")
  btnGen.classList.add("search-button")
  btnGen.textContent = cityGen;
  btnGen.setAttribute("data-index", i);
  searchResults.append(btnGen)
    }

//fetch api
  var url = ("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=" + APIKey)

  fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  
// primary display
var listItem = document.createElement("div");
listItem.textContent = data.city.name;
document.querySelector(".main-city").appendChild(listItem);

var listItem = document.createElement("div");
listItem.textContent = "Temperature: " + data.list[0].main.temp + "°C";
document.querySelector(".main-temp").appendChild(listItem);

var listItem = document.createElement("div");
listItem.textContent = "Wind: " + data.list[0].wind.speed + " mph";
document.querySelector(".main-wind").appendChild(listItem);

var listItem = document.createElement("div");
listItem.textContent = "Humidity: " + data.list[0].main.humidity + "%";
document.querySelector(".main-humidity").appendChild(listItem);

//5-day forecast display Day #1
var listItem = document.createElement("div");
listItem.textContent = "Temperature: " + data.list[7].main.temp + "°C";
document.querySelector(".box1B").appendChild(listItem);

var listItem = document.createElement("div");
listItem.textContent = "Wind: " + data.list[7].wind.speed  + " mph";
document.querySelector(".box1C").appendChild(listItem);

var listItem = document.createElement("div");
listItem.textContent = "Humidity: " + data.list[7].main.humidity + "%";
document.querySelector(".box1D").appendChild(listItem);

//5-day forecast display Day #2
var listItem = document.createElement("div");
listItem.textContent = "Temperature: " + data.list[12].main.temp + "°C";
document.querySelector(".box2B").appendChild(listItem);

var listItem = document.createElement("div");
listItem.textContent = "Wind: " + data.list[12].wind.speed + " mph";
document.querySelector(".box2C").appendChild(listItem);

var listItem = document.createElement("div");
listItem.textContent = "Humidity: " + data.list[12].main.humidity + "%";
document.querySelector(".box2D").appendChild(listItem);

//5-day forecast display Day #3
var listItem = document.createElement("div");
listItem.textContent = "Temperature: " + data.list[20].main.temp + "°C";
document.querySelector(".box3B").appendChild(listItem);

var listItem = document.createElement("div");
listItem.textContent = "Wind: " + data.list[20].wind.speed + " mph";
document.querySelector(".box3C").appendChild(listItem);

var listItem = document.createElement("div");
listItem.textContent = "Humidity: " + data.list[20].main.humidity + "%";
document.querySelector(".box3D").appendChild(listItem);

//5-day forecast display Day #4
var listItem = document.createElement("div");
listItem.textContent = "Temperature: " + data.list[28].main.temp + "°C";
document.querySelector(".box4B").appendChild(listItem);

var listItem = document.createElement("div");
listItem.textContent = "Wind: " + data.list[28].wind.speed + " mph";
document.querySelector(".box4C").appendChild(listItem);

var listItem = document.createElement("div");
listItem.textContent = "Humidity: " + data.list[28].main.humidity + "%";
document.querySelector(".box4D").appendChild(listItem);

//5-day forecast display Day #5
var listItem = document.createElement("div");
listItem.textContent = "Temperature: " + data.list[36].main.temp + "°C";
document.querySelector(".box5B").appendChild(listItem);

var listItem = document.createElement("div");
listItem.textContent = "Wind: " + data.list[36].wind.speed + " mph";
document.querySelector(".box5C").appendChild(listItem);

var listItem = document.createElement("div");
listItem.textContent = "Humidity: " + data.list[36].main.humidity + "%";
document.querySelector(".box5D").appendChild(listItem);

//date and time
var date = dayjs();
document.querySelector(".main-date").textContent = date.format("dddd (MM/D/YY)")

var date1 = dayjs().add(1,"days");
document.querySelector(".box1A").textContent = date1.format("dddd (MM/D/YY)")

var date2 = dayjs().add(2,"days");
document.querySelector(".box2A").textContent = date2.format("dddd (MM/D/YY)")

var date3 = dayjs().add(3,"days");
document.querySelector(".box3A").textContent = date3.format("dddd (MM/D/YY)")

var date4 = dayjs().add(4,"days");
document.querySelector(".box4A").textContent = date4.format("dddd (MM/D/YY)")

var date5 = dayjs().add(5,"days");
document.querySelector(".box5A").textContent = date5.format("dddd (MM/D/YY)")

  })
  }
}

weather();