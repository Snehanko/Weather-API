class Weather{
    constructor(city,state){
        this.apiKey="895b84687fcddc3e0be9289362976c63";
        this.city=city;
        this.state=state;
    }

    //Fetch Weather from
    async getWeather(){
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=metric&appid=${this.apiKey}`);
        
        const responseData=await response.json();

        return responseData;
    }

    //Change loaction
    changelocation(city,state){
        this.city=city;
        this.state=state;
    }
}