class UI{
    constructor(){
        this.location=document.getElementById('w-location');
        this.description=document.getElementById('w-desc');
        this.string=document.getElementById('w-string');
        this.deatils=document.getElementById('w-details');
        this.icon=document.getElementById('w-icon');
        this.humidity=document.getElementById('w-humidity');
        this.feelslike=document.getElementById('w-feels-like');
        this.pressure=document.getElementById('w-pressure');
        this.wind=document.getElementById('w-wind');
    }

    paint(weather){
        
        this.location.innerText=`${weather.name},${weather.sys.country}`;
        this.description.innerText=weather.weather[0].main;
        this.string.innerText=`${weather.main.temp} ℃`;
        this.humidity.innerText=`Relative Humidity : ${weather.main.humidity}`;
        this.pressure.innerText=`Pressure : ${weather.main.pressure}`;
        this.feelslike.innerText=`Feels Like : ${weather.main.feels_like} ℃`;
        this.wind.innerText=`Wind speed : ${weather.wind.speed} m/sec`;
        
        var wicon=weather.weather[0].icon;

        var wiconurl = "http://openweathermap.org/img/w/" + wicon + ".png";

        this.icon.setAttribute('src',wiconurl);
    }
}