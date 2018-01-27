// function requestWeather (city, cb) {
//   request('http://api.openweathermap.org/data/2.5/weather', {
//     qs: {
//       q: city,
//       units: 'imperial',
//       appid: '431f20e3dec4bfcfd571665b88c0f488'
//     }
//   }, function (err, response, body) {
//     if(err) {
//       console.log('error:', error);
//     } else {
//       let weather = JSON.parse(body)
//       cb(weather);
//       let message = `It's ${weather.main.temp} degrees in ${weather.name}! `;
//       console.log(message);
//     };
//   });
// }
//
// module.exports = requestWeather
//
//
// const WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather';
//
// function getAndDisplayWeather() {
//   console.log('Retrieving weather')
//   $.getJSON(WEATHER_URL, function(weather) {
//     console.log('Rendering weather');
//     var weatherElement = weather.map(function(weather) {
//       var element = $(weatherTemplate);
//       element.attr('id', weather.id);
//       element.find('.js-weather-name').text(weather.name);
//       weather.ingredients.forEach(function(ingredient) {
//         element.find('#city').append(
//           '<li>' + ingredient + '</li>');
//       });
//       return element;
//     });
//     $('#city').html(weatherElement)
//   });
// }
//
// function addWeather(weather) {
//   console.log('Adding weather: ' + weather);
//   $.ajax({
//     method: 'POST',
//     url: WEATHER_URL,
//     data: JSON.stringify(weather),
//     success: function(data) {
//       getAndDisplayWeather();
//     },
//     dataType: 'json',
//     contentType: 'application/json'
//   });
// }
//
// function handleWeatherAdd() {
//   $('#js-weather-form').submit(function(e) {
//     e.preventDefault();
//     var ingredients = $(
//       e.currentTarget).find(
//       '#ingredients-list').val().split(',').map(
//         function(ingredient) { return ingredient.trim() });
//     addWeather({
//       name: $(e.currentTarget).find('#weather-name').val(),
//       ingredients: ingredients
//     });
//   });
// }
//
// function handleWeatherDelete() {
//   $('.js-weather').on('click', '.js-weather-delete', function(e) {
//     e.preventDefault();
//     deleteWeather(
//       $(e.currentTarget).closest('.js-weather').attr('id'));
//   });
// }
//
// // function loadWeatherData () {
// //   return $.ajax(API_BASE_URL, {
// //     data: {
// //       "q": 'KansasCity',
// //       "appId": '431f20e3dec4bfcfd571665b88c0f488',
// //         "main": "Clouds",
// //       "weather": {
// //         "icon": "04d"
// //         },
// //       "main": {
// //         "temp": 40,
// //         "pressure": 100
// //         },
// //       }
// //     })
// //     .then(function (data) {
// //       console.log(loadWeatherData())
// //     });
// //   }
// //
// //$(document).ready(function(){
// //   loadWeatherData();
