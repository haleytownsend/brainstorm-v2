var city = "Kansas City"
var intensity

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

$('#entryBtn').click(function() {
  var triggers = new Array();
  $('input[name="triggers"]:checked').each(function() {
  triggers.push(this.value);
  });
  var water = $('input[name=glasses-of-water]:checked' ).val();
  var journal = $( '#journal' ).val();
  var inputs = [ intensity, triggers, water, journal, pressure, tempMax, tempMin, weatherMain]
  console.log(inputs)

  jQuery.ajax({
    type: 'POST',
    url: '/migraines',
    contentType: 'application/json; charset=utf-8',
    data: JSON.stringify({
      intensity: intensity,
      triggers: triggers,
      water: water,
      journal: journal,
      pressure: pressure,
      tempMax: tempMax,
      tempMin: tempMin,
      weatherMain: weatherMain
    }),
    dataType: 'json'
  })
    .then(jqXHR => {
      console.log('jqXHR:', jqXHR)
      alert("Your migraine was logged successfully")
      //TODO clear form
    })
    .catch(error => {
      console.error('ERROR:', error)
      alert('ERROR: Be sure you have selected the Current Level of Pain and Your Glasses of Water selection')
    })
})

$('#correlationBtn').click(function correlation() {
  $.get('/migraines', function( data ) {  })
    .then(jqXHR => {

      console.log(jqXHR)
      // var intensityData = jqXHR [0].intensity;
      // var journalData = jqXHR [0].journal;
      // var triggerData = jqXHR [0].triggers;
      // var waterData = jqXHR [0].water;
      // //const weatherData = jqXHR [0].intensity
      //
      // const data = [ intensityData, journalData, triggerData, waterData ]
      // console.log (data);

      var intensityDatabase = [];
      var triggerDatabase= [];
      var waterDatabase = [];
      var journalDatabase = [];
      var pressureDatabase = [];
      var tempMaxDatabase = [];
      var tempMinDatabase = [];
      var weatherMainDatabase = [];
      for (i = 0; i <jqXHR[i].length; i++)  {
        intensityDatabase.push(jqXHR[i].intensity),
        triggerDatabase.push(jqXHR[i].triggers),
        waterDatabase.push(jqXHR[i].water),
        journalDatabase.push(jqXHR[i].journal),
        pressureDatabase.push(jqXHR[i].pressure),
        tempMinDatabase.push(jqXHR[i].tempMin),
        tempMaxDatabase.push(jqXHR[i].tempMax),
        weatherMainDatabase.push(jqXHR[i].weatherMain)
      };
  console.log(intensityDatabase, waterDatabase, weatherMainDatabase)
var ctx = document.getElementById("myLineChart");
var myLineChart = new Chart(ctx, {
type: 'line',
data: {
    labels:["Clear", "Clouds", "Rain", "Snow", "Storms"],
    datasets: [{
      label: '# of migraines',
      data: [,
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
})
})
