let today = new Date();

function formatDate(day) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let hour = today.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let min = today.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }
  let date = today.getDate() + " " + days[today.getDay()];
  let time = `${hour}:${min}`;
  let datetime = date + "[" + time + "]";
  document.getElementById("#p1").innerHTML = `${datetime}`;
}

formatDate(today);

function displayWeatherCondition(response) {
  document.querySelector("#p2").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
}
function searchCity(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector(".form").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = 19;
}
let searchForm = document.querySelector(".weather-search-form");
searchForm.addEventListener("submit", handleSubmit);
let today = new Date();

function formatDate(day) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let hour = today.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let min = today.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }
  let date = today.getDate() + " " + days[today.getDay()];
  let time = `${hour}:${min}`;
  let datetime = date + "[" + time + "]";
  document.getElementById("#p1").innerHTML = `${datetime}`;
}

formatDate(today);

function displayWeatherCondition(response) {
  document.querySelector("#p2").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
}
function searchCity(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector(".form").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = 19;
}
let searchForm = document.querySelector(".weather-search-form");
searchForm.addEventListener("submit", handleSubmit);
