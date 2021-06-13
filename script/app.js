//Init Storage
const storage= new Storage();

const weatherLocation=storage.getLocationData();

//Init Weather Object
const weather=new Weather(weatherLocation.city,weatherLocation.state);

//Init UI object
const ui=new UI();

//change Location
document.getElementById("w-change-btn").addEventListener('click',(e)=>{
    
    const city=document.getElementById("city").value;
    const state=document.getElementById("state").value;

    if(city===''||state===''){
        
        alert("The feilds are empty")
        
    }else{
        weather.changelocation(city,state);

        //New location in local storage
         storage.setLocationData(city,state)

         getWeather();
    }

    //$('#locModal').modal('hide');
    //document.getElementById('locModal').modal('hide');

    // $('#locModal').on('shown.bs.modal', function () {
    //     $('#w-change-btn').trigger('hide')
    //   })

})



document.addEventListener('DOMContentLoaded',getWeather);
function getWeather(){
    weather.getWeather()
    .then(results=>{ui.paint(results);
        console.log(results)})
    .catch((error)=>{console.log(error)})
}
 