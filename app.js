window.addEventListener("load",()=>{
    let long;
    let lat;
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            long=position.coords.longitude;
            lat=position.coords.latitude;
            
            const proxy='https://cors-anywhere.herokuapp.com/';
            const api=`${proxy}https://api.darksky.net/forecast/6c68f6d6edb52455900aafd654360dfb/${lat},${long}`;
            fetch(api)
                .then(response=>{
                return response.json();              
            })
            .then(data=>{
                console.log(data);
            });
        });
        
    }
});