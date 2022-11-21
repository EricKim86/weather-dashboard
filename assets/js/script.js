var input = document.querySelector(".input")
var userSearch = document.querySelector(".searchbar")
var APIKey = "a34f5a1c0ef356aeb1d2cd623581eea0";

function weather() {

  var city = []
  if (city) {
    city.length === 0;
    city.push("philadelphia");
  } else {}
  
//search city function
userSearch.addEventListener("click", searchCity)

function searchCity (event) {
   event.preventDefault()
   city.pop();
   var cityInput = input.value;
   city.push(cityInput);

//clear fields after search
$(".main-city").text("");
$(".main-temp").text("");
$(".main-wind").text("");
$(".main-humidity").text("");
$(".box1B").text("");
$(".box1C").text("");
$(".box1D").text("");
$(".box2B").text("");
$(".box2C").text("");
$(".box1D").text("");
$(".box3B").text("");
$(".box3C").text("");
$(".box3D").text("");
$(".box4B").text("");
$(".box4C").text("");
$(".box4D").text("");
$(".box5B").text("");
$(".box5C").text("");
$(".box5D").text("");

//saving and display city searches
localStorage.setItem("cityRecall", JSON.stringify(cityInput));

  var url = ("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=" + APIKey)

  fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  
// primary display - using jquery to target index.html to eliminate the need to create multiple variables

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

return;
  
  })
  }
}

weather();