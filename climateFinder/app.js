let searchBtn = document.getElementById('searchBtn');
let  inputValue = document.getElementById('inputValue');
let temp = document.getElementById('currentDegree');
let humidity = document.getElementById('currentHumidity')
let realFeel = document.getElementById('currentRealFeel');
let windSpeed = document.getElementById('currentWindSpeed');
let cityName = document.getElementById('currentCity');

searchBtn.addEventListener('click', function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&appid=51a9ed3379cefdcccc1c0afc1b54ad01")

    .then(response => response.json())
    .then(data => {
        let tempValue = data['main']['temp'];
        let humidityValue = data['main']['humidity'];
        let realFeelValue = data['main']['feels_like'];
        let windSpeedValue = data['wind']['speed'];
        // let searchedCityName = data['city']['name'];

        temp.innerHTML = Math.round(tempValue - 273);
        humidity.innerHTML = humidityValue;
        realFeel.innerHTML = Math.round(realFeelValue - 273);
        windSpeed.innerHTML = windSpeedValue;
        // cityName.innerHTML = searchedCityName;

    })

    .catch(err => alert("Wrong City Name!"))
})