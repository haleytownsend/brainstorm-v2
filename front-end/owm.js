
const APP_ID = 'f9028ce0e04f945b512e9f393e22ab91'
const API_BASE_URL = '//api.openweathermap.org/data/2.5'

var owm = {}

owm.getWeather = function (options) {
  return jQuery.ajax(API_BASE_URL + '/weather', {
    data: {
      units: 'imperial',
      q: city,
      APPID: APP_ID
    }
  })
  .catch(err => {
    console.error('Something went wrong while requesting weather data:', error);
  })
  .then(payload => {
    console.log(payload);
    $('#temperature').html(payload.main.temp + '°F');
    $('#weather-icon').html('<img src="http://openweathermap.org/img/w/'+ payload.weather[0].icon + '.png">');
    $('#pressure').html(payload.main.pressure);
    $('#humidity').html(payload.main.humidity + '%');
    pressure = payload.main.pressure;
    tempMin = payload.main.temp_min;
    tempMax = payload.main.temp_max;
    weatherMain = payload.weather[0].main;
    console.log(pressure, tempMax, tempMin, weatherMain)
  })
}

owm.getForecast = function (options) {
  return jQuery.ajax(API_BASE_URL + '/forecast', {
    data: {
      units: 'imperial',
      q: city,
      APPID: APP_ID
    }
  })
  .catch(err=> {
    console.error('Something went wrong while requesting weather forecast', error);
  })
  .then(payload => {
    console.log(payload);
    $('#day1').html(payload.list["0"].dt_txt);
    $('#day1-temp').html(payload.list["0"].main.temp + '°');
    $('#day1-icon').html('<img src="http://openweathermap.org/img/w/'+ payload.list["0"].weather["0"].icon + '.png">');
    $('#day2').html(payload.list["8"].dt_txt);
    $('#day2-temp').html(payload.list["8"].main.temp + '°');
    $('#day2-icon').html('<img src="http://openweathermap.org/img/w/'+ payload.list["8"].weather["0"].icon + '.png">');
    $('#day3').html(payload.list["16"].dt_txt);
    $('#day3-temp').html(payload.list["16"].main.temp + '°');
    $('#day3-icon').html('<img src="http://openweathermap.org/img/w/'+ payload.list["16"].weather["0"].icon + '.png">');
    $('#day4').html(payload.list["24"].dt_txt);
    $('#day4-temp').html(payload.list["24"].main.temp + '°');
    $('#day4-icon').html('<img src="http://openweathermap.org/img/w/'+ payload.list["24"].weather["0"].icon + '.png">');
    $('#day5').html(payload.list["32"].dt_txt);
    $('#day5-temp').html(payload.list["32"].main.temp + '°');
    $('#day5-icon').html('<img src="http://openweathermap.org/img/w/'+ payload.list["32"].weather["0"].icon + '.png">')
  })
}
