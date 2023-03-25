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
         mainBody = document.body;  
    
// AddEventListener for clicking btn
searchBtn.addEventListener("click", function () {
  getWeatherData();
});

// AddEventListener for pressing enter
searchInputValue.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getWeatherData();
  }
});

// Function to fetch weather data and update HTML
function getWeatherData() {

  // Check if input value is empty
  if (!searchInputValue.value) {
    alert("Please enter a city name to search for weather information.");
    return;
  }

  let api = `https://api.openweathermap.org/data/2.5/weather?q=${searchInputValue.value}&appid=51a9ed3379cefdcccc1c0afc1b54ad01`;
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      let tempValue = data.main.temp;
      let humidityValue = data.main.humidity;
      let realFeelValue = data.main.feels_like;
      let windSpeedValue = data.wind.speed;
      let searchedCityName = data.name;
      let countryShort = data.sys.country;
      let description = data.weather[0].description;
      console.log(description);
      console.log(data);
      

      // Celsius = kelvin - 273.15, so we are subtracting 273.15 to show the result in celsius...
      let celsiusTemperature = tempValue - 273.15;
      let realFeelTemperature = realFeelValue - 273.15;

      temperature.innerText = Math.round(celsiusTemperature);
      humidity.innerText = humidityValue;
      realFeel.innerText = Math.round(realFeelTemperature);
      windSpeed.innerText = windSpeedValue;
      cityName.innerText = searchedCityName;
      countryName.innerText = countryShort;






      
      if(description.includes("clear sky")){
        mainBody.style.backgroundImage = 'url("weatherImages/clearSky.jpg")';
        svgInfo.src = "icons/clear-cloudy.svg";
      }
      else if(description.includes("cloud")){
        mainBody.style.backgroundImage = 'url("weatherImages/clouds.jpg")';
        svgInfo.src = "icons/cloudy.svg";
      }
      else if(description.includes("rain") || description.includes("drizzle")){
        mainBody.style.backgroundImage = 'url("weatherImages/rain.jpg")';
        svgInfo.src = "icons/drizzle.svg";
      }
      else if(description.includes("thunderstorm")){
        mainBody.style.backgroundImage = 'url("weatherImages/thunderstorm.jpg")';
        svgInfo.src = "icons/thunderstorms.svg";
      }
      else if(description.includes("snow")){
        mainBody.style.backgroundImage = 'url("weatherImages/snowing.jpg")';
        svgInfo.src = "icons/snow.svg";
      }
      else if(description.includes("mist")){
        mainBody.style.backgroundImage = 'url("weatherImages/mist.jpg")';
        svgInfo.src = "icons/fog.svg";
      }
      else if(description.includes("smoke")){
        mainBody.style.backgroundImage = 'url("weatherImages/smoke.jpg")';
        svgInfo.src = "icons/fog.svg";
      }
      else if(description.includes("haze")){
        mainBody.style.backgroundImage = 'url("weatherImages/haze.jpg")';
        svgInfo.src = "icons/fog.svg";
      }
      else if(description.includes("dust")){
        mainBody.style.backgroundImage = 'url("weatherImages/dust.jpg")';
        svgInfo.src = "icons/fog.svg";
      }
      else if(description.includes("fog")){
        mainBody.style.backgroundImage = 'url("weatherImages/fog.jpg")';
        svgInfo.src = "icons/fog.svg";
      }
      else if(description.includes("squall")){
        mainBody.style.backgroundImage = 'url("weatherImages/squallWind.jpg")';
        svgInfo.src = "icons/windy.svg";
      }
      else if(description.includes("tornodo")){
        mainBody.style.backgroundImage = 'url("weatherImages/tornado.jpg")';
        svgInfo.src = "icons/tornado.svg";
      }
      else if(description.includes("ash")){
        mainBody.style.backgroundImage = 'url("weatherImages/ash.jpg")';
        svgInfo.src = "icons/fog.svg";
      }
      else if(description.includes("sand")){
        mainBody.style.backgroundImage = 'url("weatherImages/sand.jpg")';
        svgInfo.src = "icons/fog.svg";
      }
      else if(description.includes("hurricane")){
        mainBody.style.backgroundImage = 'url("weatherImages/hurricane.jpg")';
        svgInfo.src = "icons/fog.svg";
      }
    })
    .catch((err) => {
      alert("Error");
      console.log(err);
    });
}

// Dark and Light mode
// let btnChange = document.querySelector(".circleChange");
// let darkLightValue = 1; // 1 is dark 0 is light mode value

// btnChange.addEventListener("click", function () {
//   if (darkLightValue == 0) {
//     btnChange.style.marginLeft = "50px";
//     bodyColor.style.backgroundColor = "#100f14";
//     darkLightValue = 1;
//   } 
//   else {
//     btnChange.style.marginLeft = "0px";
//     bodyColor.style.backgroundColor = "#6096fd";
//     darkLightValue = 0;
//   }
// });




// Random large cities and their info

/* These variables store references to various HTML elements on the page, including the search button, input field,
   and elements used to display weather information. They are declared using const and initialized with the corresponding
   HTML element using the getElementById() method.*/
   const largeCity1 = document.getElementById("largeCity1"),
         largeCity2 = document.getElementById("largeCity2"),
         largeCity3 = document.getElementById("largeCity3")
         
    





  // function getWeatherData() {
  //   let api = `https://api.openweathermap.org/data/2.5/weather?q=${searchInputValue.value}&appid=51a9ed3379cefdcccc1c0afc1b54ad01`;
  //   fetch(api)
  //     .then((response) => response.json())
  //     .then((data) => {

  //       let largeCitiesList = [
  //         "tokyo", "delhi", "shanghai", "sao paulo", "mexico",
  //         "cairo", "mumbai", "bejing", "dhaka", "osaka"
  //       ]

  //       // Random Cities and updating in HTML
  //     let result = [];
  //     for (let i = 0; i < 3; i++) {
  //     let randomIndex = Math.floor(Math.random() * largeCitiesList.length);
  //     result.push(largeCitiesList[randomIndex]);
  //     largeCitiesList.splice(randomIndex, 1);
  // }
  // console.log(result);

  //       let tempValue = data.main.temp;
  //       let humidityValue = data.main.humidity;
  //       let realFeelValue = data.main.feels_like;
  //       let windSpeedValue = data.wind.speed;
  //       let searchedCityName = data.name;
  //       let countryShort = data.sys.country;
  //       let description = data.weather[0].description;
  //       console.log(description);
        
  
  //       // Celsius = kelvin - 273.15, so we are subtracting 273.15 to show the result in celsius...
  //       let celsiusTemperature = tempValue - 273.15;
  //       let realFeelTemperature = realFeelValue - 273.15;
  
  //       temperature.innerText = Math.round(celsiusTemperature);
  //       humidity.innerText = humidityValue;
  //       realFeel.innerText = Math.round(realFeelTemperature);
  //       windSpeed.innerText = windSpeedValue;
  //       cityName.innerText = searchedCityName;
  //       countryName.innerText = countryShort;
  //     })
  //     .catch((err) => {
  //       alert("Error");
  //       console.log(err);
  //     });
  // }