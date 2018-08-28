$(document.ready(function() {
    function getLocation(){
        if(navigator.geolocation){
            navigator.getCurrentPosition(showPosition);
        }
    }
    function showPosition(position){
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        var locationCall = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + long;
        
    }
    
    function getWeather(){
        var weatherURL = "https://fcc-weather-api.glitch.me/api/current?";
    }
});