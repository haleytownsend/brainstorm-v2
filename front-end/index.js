var city = "Kansas City"
var intensity
var water
var glassesOfWater

owm.getWeather({city: city})

owm.getForecast({city:city})

$('#searchBtn').click(function () {
  city = $('#searchCity').val()
  console.log(city);
  $('#city').html(city);
  owm.getWeather({city: city})
  owm.getForecast({city: city})
})

$(function() {
  $('#slider').slider({
    value:5,
    min: 0,
    max: 10,
    step: 1,
    slide: function(ev, ui) {
      $( '#migraine-level' ).html( ui.value );
      console.log(ui.value);
      intensity = ui.value
    }
  });
});

function getRadioCheckedValue(water) {
  water = document.forms[0].elements[water];
  for(var i =0; i < water.length; i++) {
    if (water[i].checked) {
      console.log (water[i].value);
      glassesOfWater = water[i].value
    }
  } return'';
}

$('#entryBtn').click(function() {
  var triggers = $('input[type = checkbox]' ).html;
  var water = $('input[name=glasses-of-water]:checked' ).val();
  var journal = $( '#journal' ).val();
  console.log( intensity, water, journal )
})


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
