const api_key = "81a381dfb6915cc648b044e4cc3268f1";
const api_link = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search_box = document.querySelector(".search input");
const search_button = document.querySelector(".search button");
const weather_icon = document.querySelector(".weather_icon");

async function check_weather(city){
    const response = await fetch(api_link + city + "&appid=" + api_key);
    if(response.status == 404)
    {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else
    {
        document.querySelector(".error").style.display = "none";
        let data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds")
        {
            weather_icon.src = "images/clouds.png"
        }
        else if(data.weather[0].main == "Clear")
        {
            weather_icon.src = "images/clear.png"
        }
        else if(data.weather[0].main == "Rain")
        {
            weather_icon.src = "images/rain.png"
        }
        else if(data.weather[0].main == "Drizzle")
        {
            weather_icon.src = "images/drizzle.png"
        }
        else if(data.weather[0].main == "Snow")
        {
            weather_icon.src = "images/snow.png"
        }
        else if(data.weather[0].main == "Mist")
        {
            weather_icon.src = "images/mist.png"
        }
        document.querySelector(".weather").style.display = "block";
    }
}

search_button.addEventListener("click",()=>
{
    check_weather(search_box.value);
});
