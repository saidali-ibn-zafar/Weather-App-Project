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
        console.log(data);
        let searchedCityName = data['name'];


        temp.innerHTML = Math.round(tempValue - 273);
        humidity.innerHTML = humidityValue;
        realFeel.innerHTML = Math.round(realFeelValue - 273);
        windSpeed.innerHTML = windSpeedValue;
        cityName.innerHTML = searchedCityName;

    })

    .catch (err => {alert("bla bla bla"); console.log(err)})
    // .catch(err => alert("Wrong City Name!"))
    
})


let btnChange = document.querySelector('.circleChange');
let bodyColor = document.body;
        let value = 1;

        btnChange.addEventListener('click', function(){
            if(value == 0){
                btnChange.style.marginLeft = "50px";
                bodyColor.style.backgroundColor = "#100f14";
                value = 1;
            }
            else{
                btnChange.style.marginLeft = "0px";
                bodyColor.style.backgroundColor = "#6096fd";
                value = 0;
            }

        })
