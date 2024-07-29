// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=0190d09d2b0674226c0d9708a502b532&units=metric


const apiKey = "0190d09d2b0674226c0d9708a502b532";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherImage = document.querySelector(".weather-icon"); 

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    else{
        var data = await response.json();


document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

if(data.weather[0].main == "Clouds"){
    weatherImage.src = "weather-app-img/images/clouds.webp";
}
else if(data.weather[0].main == "Clear"){
    weatherImage.src = "weather-app-img/images/clear.webp";
}
else if(data.weather[0].main == "Rain"){
    weatherImage.src = "weather-app-img/images/rain.webp";
}
else if(data.weather[0].main == "Drizzle"){
    weatherImage.src = "weather-app-img/images/drizzle.webp";
}
else if(data.weather[0].main == "Mist"){
    weatherImage.src = "weather-app-img/images/mist.webp";
}

document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";

    }

}

searchBtn.addEventListener("click", ()=>{
    
    checkWeather(searchBox.value);

})
