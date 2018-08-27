$(document).ready(function() {
  var fahrenheit, celsius;
  var url="https://api.openweathermap.org/data/2.5/weather";
  var key = "ac2c360b739bd8b428dc05243bbe6312"; 
	getLocation();
	function getWeather(){
		$.ajax({
			url: url,
			type: 'GET',
			dataType: 'json',
			success: (data) => {
				var temp = data.main.temp;
				celsius = temp;
				fahrenheit = celsius * 1.8 + 32;
				var icon = data.weather[0].icon;
				var desc = data.weather[0].description;
				$('#desc').html(desc);
				$('#icon>img').attr('src','http://openweathermap.org/img/w/'+icon+'.png');
				$('#temp').html(temp+"&#8451;");
			},
			error: (err) => {
				alert('Oops something went wrong, Please try again.');
				console.log(err);
			}
		});
	}
	function getLocation(){
		$.ajax({
			url: "https://geoip-db.com/json/",
			type: 'GET',
      dataType: 'json',
			success: (data) => {
        var lat = data.latitude;
        var long = data.longitude;
        var city = data.city;
        var country = data.country_name;
        
        $('#city').html(city);
			  $('#country').html(country);
        url += "?lat="+lat+"&lon="+long+"&APPID="+key+"&units=metric";
        getWeather();
      },
			error: (err) => {
				alert('Oops something went wrong, Please try again.');
				console.log(err);
			}
		});
	}
	//toggle between celsius and fahrenheit
	$('.toggle .btn').click(function(){
		if($('.toggle').attr('id')=='c'){
			$('#temp').html(fahrenheit+"&#8457;");
			$('.toggle').attr('id','f');
		}
	 else if($('.toggle').attr('id')=='f'){
			$('#temp').html(celsius+"&#8451;");
			$('.toggle').attr('id','c');
		}
	});
});