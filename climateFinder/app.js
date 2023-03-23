const searchBtn = document.getElementById("searchBtn");
const inputValue = document.getElementById("inputValue");
const temp = document.getElementById("currentDegree");
const humidity = document.getElementById("currentHumidity");
const realFeel = document.getElementById("currentRealFeel");
const windSpeed = document.getElementById("currentWindSpeed");
const cityName = document.getElementById("currentCity");
const countryName = document.getElementById("currentCountry");
searchBtn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&appid=51a9ed3379cefdcccc1c0afc1b54ad01"
  )
    .then((response) => response.json())
    .then((data) => {
      let tempValue = data["main"]["temp"];
      let humidityValue = data["main"]["humidity"];
      let realFeelValue = data["main"]["feels_like"];
      let windSpeedValue = data["wind"]["speed"];
      console.log(data);
      let searchedCityName = data["name"];
      let countryShort = data["sys"]["country"];
      // console.log(countryCode)

      temp.innerHTML = Math.round(tempValue - 273.15);
      humidity.innerHTML = humidityValue;
      realFeel.innerHTML = Math.round(realFeelValue - 273.15);
      windSpeed.innerHTML = windSpeedValue;
      cityName.innerHTML = searchedCityName;
      countryName.innerText = countryShort;
    })

    .catch((err) => {
      alert("bla bla bla");
      console.log(err);
    });
  // .catch(err => alert("Wrong City Name!"))
});

let btnChange = document.querySelector(".circleChange");
let bodyColor = document.body;
let value = 1;

btnChange.addEventListener("click", function () {
  if (value == 0) {
    btnChange.style.marginLeft = "50px";
    bodyColor.style.backgroundColor = "#100f14";
    value = 1;
  } else {
    btnChange.style.marginLeft = "0px";
    bodyColor.style.backgroundColor = "#6096fd";
    value = 0;
  }
});