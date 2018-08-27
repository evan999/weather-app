$(document).ready(function(){
           
           // var weatherAPI = "https://fcc-weather-api.glitch.me/api/current?lon=:longitude&lat=:latitude";
           
           // Get Location
           
       function getLocation(){
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(function(position){
                    var lat = position.coords.latitude;
                    var long = position.coords.longitude;
                    getWeather(lat, long);
                });
            }
       }
       
      
        fetch("https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon)
        .then((res) => {
	        return res.json()
        })
        .then((json) => {
	        console.log(json)
        })
        .catch((err) => {
	        console.log(err)
        })


       
       
       $.getJSON(weatherAPI, function(data){
           getWeather(data);
       });
       
       function getWeather(lat, long){
          var weatherAPI = "https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}";
          updateDOM(data);
       }
       
       function updateDOM(data){
           
          var city = data.name;
          var temp = Math.round(data.main.temp);
          var desc = data.weather[0].description;
          var icon = data.weather[0].icon;

          $('#city').html(city);
          $('#temp').html(temp);
          $('#desc').html(desc);
          $('#icon').attr('src', icon);
       }
     
    });
    
    function cToF(c){
        return c * 9/5 + 32;
    }
    
    function fToC(f){
        return (f - 32) * 5 / 9;
    }
    
    function toggleSymbol(){
        if($('#symbol').innerHTML === 'F'){
            $('#temp').innerHTML = fToC($('#symbol').innerHTML).toFixed(2);
            $('#symbol').innerHTML = "C";
        }
        else if($('#symbol').innerHTML === 'C'){
            $('#temp').innerHTML = cToF($('#symbol').innerHTML).toFixed(2);
            $('#symbol').innerHTML = "F";
        }
        $('#switch-bttn').addEventListener("click", toggleSymbol);
    }