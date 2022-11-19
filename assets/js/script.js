var userSearch = document.querySelector(".searchbar")
var box1A = document.querySelector(".box1A")

var city;
city = "philadelphia";
var APIKey = "a34f5a1c0ef356aeb1d2cd623581eea0";

function getAPI() {

  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + APIKey)
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
    listItem.textContent = "Temperature: " + data.main.temp;
    $(".main-temp").append(listItem);

    var listItem = document.createElement("div");
    listItem.textContent = "Wind: " + data.wind.speed + " mph";
    $(".main-wind").append(listItem);

    var listItem = document.createElement("div");
    listItem.textContent = "Humidity: " + data.main.humidity + " %";
    $(".main-humidity").append(listItem);

//5-day forecast display

  });
}

//saving and display city searches


//search city function
userSearch.addEventListener("click", e => {
  var value = e.target.value
 console.log(value);
})

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

getAPI()