var SAbtn = document.querySelector("#SAbtn")
var Hbtn = document.querySelector("#Hbtn")





function sanAntonioWD(){
    return(api.openweathermap.org/data/2.5/forecast?lat=29.4252&lon:98.4946&appid)=cbcd6ee571cf40815e88497f84281ae6;
    var WeatherData = sanAntonioWD();
}
function houstonWD(){
    return(api.openweathermap.org/data/2.5/forecast?lat=29.749907&lon:-95.358421&appid)=cbcd6ee571cf40815e88497f84281ae6;
    var WeatherData = sanAntonioWD();
}
var WeatherData = sanAntonioWD

var weatherText = document.querySelector("#weatherData");

weatherText.value = WeatherData;
SAbtn.addEventListener("click", sanAntonioWD)
Hbtn.addEventListener("click", houstonWD)
//api.openweathermap.org/data/2.5/forecast?lat="LAT"&lon="LON"&appid="API KEY";




