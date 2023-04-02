/* These variables store references to various HTML elements on the page, including the search button, input field,
   and elements used to display weather information. They are declared using const and initialized with the corresponding
   HTML element using the getElementById() method.*/
const searchBtn = document.getElementById("searchBtn"),
  searchInputValue = document.getElementById("inputValue"),
  temperature = document.getElementById("currentDegree"),
  humidity = document.getElementById("currentHumidity"),
  realFeel = document.getElementById("currentRealFeel"),
  windSpeed = document.getElementById("currentWindSpeed"),
  cityName = document.getElementById("currentCity"),
  countryName = document.getElementById("currentCountry"),
  svgInfo = document.getElementById("iconWeatherImage"),
  time24 = document.getElementById("currentTime")
  mainBody = document.body;



// // Prompt the user for the country name

// // Make a GET request to the TimeZoneDB API
// fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=NTBTWQK5XRG7&format=json&by=zone&zone=${searchInputValue.value}}`)
//   .then(response => response.json())
//   .then(data => {
//     // Extract the current time from the response data
//     const currentTime = data.formatted;

//     console.log(currentTime);
//     // Display the current time to the user
//     time24.innerHTML = currentTime;
//   })
//   .catch(error => console.log(error))


 // Time API 
 let timeApi = `https://api.ipgeolocation.io/timezone?apiKey=857a7779119b44b88b4064d241f04ba7&location=${searchInputValue.value}`;
 fetch(timeApi)
 .then((response) => response.json())
 .then((geo) => {
   let currentTime24 = geo.time_24;

   time24.innerText = currentTime24;
 })
 .catch((err) => {
   alert("Error");
   console.log(err);
 });



  // document.querySelectorAll(".suggestions").forEach(function(suggestion) {
  //   suggestion.addEventListener("click", function() {
  //     const input = document.querySelector("#inputValue");
  //     input.value = this.innerText;
  //   });
  // });
// AddEventListener for clicking btn
searchBtn.addEventListener("click", function () {
  getWeatherData();
  getWeatherData2();
  weeklyInfo();
});

// AddEventListener for pressing enter
searchInputValue.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getWeatherData();
    getWeatherData2();
    weeklyInfo();
  }
});

// Function to fetch weather data and update HTML
function getWeatherData() {
  // Check if input value is empty
  if (!searchInputValue.value) {
    alert("Please enter a city name to search for weather information.");
    return;
  }
  

  let api = `https://api.openweathermap.org/data/2.5/weather?q=${searchInputValue.value}&appid=8058e2e53a8cdc888b244254fc6ceeed`;
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      // let tempValue = data.main.temp;
      let humidityValue = data.main.humidity;
      let realFeelValue = data.main.feels_like;
      let windSpeedValue = data.wind.speed;
      let searchedCityName = data.name;
      let countryShort = data.sys.country;
      let description = data.weather[0].description;
      console.log(description);
      

      // Celsius = kelvin - 273.15, so we are subtracting 273.15 to show the result in celsius...
      // let celsiusTemperature = tempValue - 273.15;
      let realFeelTemperature = realFeelValue - 273.15;

      // temperature.innerText = Math.round(celsiusTemperature);
      humidity.innerText = humidityValue;
      realFeel.innerText = Math.round(realFeelTemperature);
      windSpeed.innerText = windSpeedValue;
      cityName.innerText = searchedCityName;
      countryName.innerText = countryShort;

      if (description.includes("clear sky")) {
        mainBody.style.backgroundImage = 'url("weatherImages/clearSky.jpg")';
        svgInfo.src = "icons/clear-cloudy.svg";
      } else if (description.includes("cloud")) {
        mainBody.style.backgroundImage = 'url("weatherImages/clouds.jpg")';
        svgInfo.src = "icons/cloudy.svg";
      } else if (
        description.includes("rain") ||
        description.includes("drizzle")
      ) {
        mainBody.style.backgroundImage = 'url("weatherImages/rain.jpg")';
        svgInfo.src = "icons/drizzle.svg";
      } else if (description.includes("thunderstorm")) {
        mainBody.style.backgroundImage =
          'url("weatherImages/thunderstorm.jpg")';
        svgInfo.src = "icons/thunderstorms.svg";
      } else if (description.includes("snow")) {
        mainBody.style.backgroundImage = 'url("weatherImages/snowing.jpg")';
        svgInfo.src = "icons/snow.svg";
      } else if (description.includes("mist")) {
        mainBody.style.backgroundImage = 'url("weatherImages/mist.jpg")';
        svgInfo.src = "icons/fog.svg";
      } else if (description.includes("smoke")) {
        mainBody.style.backgroundImage = 'url("weatherImages/smoke.jpg")';
        svgInfo.src = "icons/fog.svg";
      } else if (description.includes("haze")) {
        mainBody.style.backgroundImage = 'url("weatherImages/haze.jpg")';
        svgInfo.src = "icons/fog.svg";
      } else if (description.includes("dust")) {
        mainBody.style.backgroundImage = 'url("weatherImages/dust.jpg")';
        svgInfo.src = "icons/fog.svg";
      } else if (description.includes("fog")) {
        mainBody.style.backgroundImage = 'url("weatherImages/fog.jpg")';
        svgInfo.src = "icons/fog.svg";
      } else if (description.includes("squall")) {
        mainBody.style.backgroundImage = 'url("weatherImages/squallWind.jpg")';
        svgInfo.src = "icons/windy.svg";
      } else if (description.includes("tornodo")) {
        mainBody.style.backgroundImage = 'url("weatherImages/tornado.jpg")';
        svgInfo.src = "icons/tornado.svg";
      } else if (description.includes("ash")) {
        mainBody.style.backgroundImage = 'url("weatherImages/ash.jpg")';
        svgInfo.src = "icons/fog.svg";
      } else if (description.includes("sand")) {
        mainBody.style.backgroundImage = 'url("weatherImages/sand.jpg")';
        svgInfo.src = "icons/fog.svg";
      } else if (description.includes("hurricane")) {
        mainBody.style.backgroundImage = 'url("weatherImages/hurricane.jpg")';
        svgInfo.src = "icons/fog.svg";
      }
    })
    .catch((err) => {
      alert("Error");
      console.log(err);
    });
}


// Random large cities and their info
function getWeatherData2() {
  let largeCitiesList = [
    "tokyo",
    "delhi",
    "shanghai",
    "sao paulo",
    "mexico",
    "cairo",
    "mumbai",
    "bejing",
    "dhaka",
    "osaka",
    "new york",
    "istanbul",
    "paris",
    "moscow",
    "dhaka",
    "buenos aires",
    "medina",
    "tashkent",
    "samarkand",
    "andijan",
    "qashqadaryo",
    "palestine"
  ];

  // Random Cities and updating in HTML
  let result = [];
  for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * largeCitiesList.length);
    result.push(largeCitiesList[randomIndex]);
    largeCitiesList.splice(randomIndex, 1);
  }
  // console.log(result);

  for (let i = 0; i < 3; i++){
    let api1 = `https://api.openweathermap.org/data/2.5/weather?q=${result[i]}&appid=8058e2e53a8cdc888b244254fc6ceeed`;
    fetch(api1)
    .then((response) => response.json())
    .then((data) => {
      let temperatureValue = data.main.temp - 273.15;
      let description = data.weather[0].description;

      document.getElementById("largeCity"+(i+1)).innerHTML = data.name;
      document.getElementById("largeCity"+(i+1)+"Country").innerHTML = data.sys.country;
      document.getElementById("largeCity"+(i+1)+"Temp").innerHTML = Math.round(temperatureValue) + "°";
      document.getElementById("largeCity"+(i+1)+"Description").innerHTML = description;

    })
    .catch((err) => {
      // alert("Error");
      console.log(err);
    });
}
}



function weeklyInfo() {
  const api = `https://api.openweathermap.org/data/2.5/forecast?q=${searchInputValue.value}&appid=8058e2e53a8cdc888b244254fc6ceeed`;
  
  fetch(api)
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < 7; i++) {
        const Temp = Number(data.list[i].main.temp - 273.15).toFixed(0);
        document.getElementById("day" + (i+1) + "Temp").innerHTML = Temp + "°";
      }
    })
    .catch(err => {
      console.log(err);
    });
}



  
//Getting and displaying the text for the upcoming five days of the week
let d = new Date();
let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",];

//Function to get the correct integer for the index of the days array
function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<7; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }
    //------------------------------------------------------------



    window.onload = function () {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
      } else {
          console.error("Geolocation is not supported");
      }
  };

  function successCallback(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const apiKey = '8058e2e53a8cdc888b244254fc6ceeed';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
              const temperature = Math.round(data.main.temp);
              const realFeel = data.main.feels_like;
              const description = data.weather[0].description;
              const city = data.name;
              const country = data.sys.country;
              const windspeed = data.wind.speed;
              const humidity = data.main.humidity;

              document.getElementById('day1Temp').textContent = `${temperature}°C`;
              document.getElementById('currentRealFeel').textContent = `${realFeel}`;
              document.getElementById('description').textContent = description;
              document.getElementById('currentCity').textContent = `${city}`;
              document.getElementById('currentCountry').textContent = `${country}`;
              document.getElementById('currentWindSpeed').textContent = `${windspeed}`;
              document.getElementById('currentHumidity').textContent = `${humidity}`;

              // Show an alert to the user
              const alertMessage = `The weather in ${city}, ${country} is ${description} with a temperature of ${temperature}°C, a real feel of ${realFeel}°C, wind speed of ${windspeed} m/s, and humidity of ${humidity}%. If u need more weekly information of where u are now, just type on search bar!`;
              alert(alertMessage);
          })
          .catch(error => console.error(error));
  }


  function errorCallback(error) {
      console.error(error.message);
  }


  $(document).ready(function() {
    $('#inputValue').keyup(function() {
        var query = $(this).val();
        if(query != '') {
            $.ajax({
                url: 'https://api.openweathermap.org/data/2.5/find?q=' + query + '&type=like&mode=json&units=metric&APPID=8058e2e53a8cdc888b244254fc6ceeed',
                method: 'GET',
                dataType: 'json',
                success: function(data) {
                    var suggestions = [];
                    $.each(data.list, function(index, value) {
                        suggestions.push('<li>' + value.name + ', ' + value.sys.country + '</li>');
                    });
                    $('.suggestions').html(suggestions.join(''));
                }
            });
        } else {
            $('.suggestions').empty();
        }
    });

    $(document).on('click', '.suggestions li', function() {
        var city = $(this).text();
        $('#inputValue').val(city);
        $('.suggestions').empty();
    });
});


// getting the current year 
const currentYear = document.querySelector('#current-year');
currentYear.innerHTML = new Date().getFullYear();