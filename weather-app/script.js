const apikey="9835ecef0a296b74489101d274fa7899";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchbox=document.querySelector('.search input')
const searchbtn=document.querySelector('.search button')
const weather=document.querySelector('.weather-icon')
async function checkweather(city){
    const response=await fetch(apiurl+city+'&appid=9835ecef0a296b74489101d274fa7899');
    var data=await response.json();
    console.log(data);
    if(typeof(data.name)==='undefined'){
        alert('failed to obtain data')
    }
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+'°c';
    document.querySelector('.humidity').innerHTML=data.main.humidity+"%";
    document.querySelector('.wind').innerHTML=data.wind.speed+"km/h";
    if(data.weather[0].main=='Clouds'){
        weather.src="/images/cloudy.png"
    }
    else if(data.weather[0].main=="Rain"){
        weather.src="/images/rain.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weather.src="/images/rain.png"
    }
    else if(data.weather[0].main=="Mist"){
        weather.src="/images/fog.png";
    }
    else if(data.weather[0].main=="Clear"){
        weather.src="/images/sun.png";
    } 
    else if(data.weather[0].main=="Snow"){
        weather.src="/images/snowman.png";
    } 
}
searchbtn.addEventListener('click',()=>{
    if(searchbox.value===""){
        alert('enter a city name')
    }
    else
    {
        checkweather(searchbox.value)
    }
}
)
