class Storage{
    constructor(){
        this.city;
        this.state;
        this.defaultCity='Bangalore';
        this.defaultState='India'; 
    }

    getLocationData(){
        if(localStorage.getItem('city') === null||localStorage.getItem('city') === undefined){
            this.city=this.defaultCity;
        }else{
            this.city=localStorage.getItem('city');
        }

        if(localStorage.getItem('state') === null||localStorage.getItem('state') === undefined){
            this.state=this.defaultState;
        }else{
            this.state=localStorage.getItem('state');
        }

        return {
            city:this.city,
            state:this.state
        }
    }

    setLocationData(city,state){
        localStorage.setItem("city",city);
        localStorage.setItem("state",state);
    }
}
