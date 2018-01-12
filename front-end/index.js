
owm.getWeather({
  city: 'Kansas City'
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
  })

owm.getForecast({
  city: 'Kansas City'
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
    $('#day5-icon').html('<img src="http://openweathermap.org/img/w/'+ payload.list["32"].weather["0"].icon + '.png">');
  })


  $( function() {
    $('#slider').slider({
      value:5,
      min: 0,
      max: 10,
      step: 1,
      slide: function(ev, ui) {
        // console.log('Value changed:', arguments);
        $( '#migraine-level' ).html( ui.value );
      }
    });
    //$( "#amount" ).val( "$" + $( "#slider" ).slider( "value" ) );
  } );





var ctx = document.getElementById("myLineChart");
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels:["Sunny", "Rain", "Wind", "Storms", "Swing in Bar Pressure", "Swing in Temp"],
        datasets: [{
          label: '# of migraines',
          data: [3, 4, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


var ctx = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Stress", "Sleep", "Hormones", "Food", "Alcohol", "Physical activity"],
        datasets: [{
            label: '# of Migraines',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(200, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }],
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


var ctx = document.getElementById("myRadarChart");
var myRadarChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ["Sunny", "Rain", "Wind", "Storms", "Swing in Bar Pressure", "Swing in Temp"],
    datasets: [{
      label: 'Intensity of pain',
      data: [4, 1, 8, 3, 2, 7],
      backgroundColor: 'rgba(255, 159, 64, .4)',
    },
    {
      label: 'cups of water',
      data: [1, 2, 8, 4, 6, 7],
      backgroundColor: 'rgba(75, 192, 192, .4)',
    },
    {
      label: '# of migraines',
      data: [3, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(153, 162, 64, .4)',
    },
  ]},
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});

//
//
// var ctx = document.getElementById("myMixedChart");
// var myMixedChart = new Chart(ctx, {
//     type: 'bar',
//     data:
//       datasets: [{
//         label: "Intensity bar",
//         data: [12, 19, 3, 5, 2, 3],
//       },
//       {
//         label: '# of migraines line',
//         data: [3, 4, 3, 5, 2, 3],
//         type: "line"
//       }],
//     labels: ["Sunny", "Rain", "Wind", "Storms", "Swing in Bar Pressure", "Swing in Temp"],
//         //   backgroundColor: [
//         //         'rgba(200, 99, 132, 0.2)',
//         //         'rgba(54, 162, 235, 0.2)',
//         //         'rgba(255, 206, 86, 0.2)',
//         //         'rgba(75, 192, 192, 0.2)',
//         //         'rgba(153, 102, 255, 0.2)',
//         //         'rgba(255, 159, 64, 0.2)'
//         //   ],
//         //   borderColor: [
//         //         'rgba(255,99,132,1)',
//         //         'rgba(54, 162, 235, 1)',
//         //         'rgba(255, 206, 86, 1)',
//         //         'rgba(75, 192, 192, 1)',
//         //         'rgba(153, 102, 255, 1)',
//         //         'rgba(255, 159, 64, 1)'
//         //   ],
//         //   borderWidth: 1
//         // }],
//     options: {
//       scales: {
//         yAxes: [{
//           ticks: {beginAtZero:true}
//         }]
//       }
//     }
//   })
