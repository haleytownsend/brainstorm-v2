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

  if (!triggers.length || !water || !journal) {
    alert('ERROR: Be sure you have selected the Current Level of Pain and Your Glasses of Water selection')
    return
  }

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
      alert('Something went wrong while contacting Brainstorm servers')
    })
})

$('#correlationBtn').click(function correlation() {
  var dataSet;
  $.get('/migraines', function( data ) {  })
    .then(jqXHR => {
      var arr = {
        "date":[jqXHR[0].createdAt],
        "intensity":[jqXHR[0].intensity],
        "water":[jqXHR[0].water],
        "pressure":[jqXHR[0].pressure],
        "weatherMain":[jqXHR[0].weatherMain]
      };
      arr.forEach(function(elementl) {
        console.log(element)
        console.log(arr)
      })
    })

      // var intensity = []
      // var intensityData = [jqXHR [0].intensity];
      // var journalData = jqXHR [0].journal;
      // var triggerData = jqXHR [0].triggers;
      // var waterData = jqXHR [0].water;
      //
      // const data = [ intensityData, journalData, triggerData, waterData ]
      // console.log (data);

      // var allData = {
      //   "date": [jqXHR[0].dt],
      //   "intensity": [jqXHR [0].intensity],
      //   "journal": [jqXHR [0].journal],
      //   "trigger": [jqXHR [0].triggers],
      // }
      //
      // console.log(allData)

var ctx = document.getElementById("myLineChart");
var myLineChart = new Chart(ctx, {
type: 'line',
data: {
    labels:["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: 'Intensity',
        data: [1, 3, 1, 4],
        backgroundColor: ['rgba(0, 99, 132, 0.2)'],
        borderColor: ['rgba(0,99,132,1)'],
        borderWidth: 1,
        fill: false,
        yAxisID: 'y-axis-1'
      },
      {
        label: '# of migraines',
        data: [2, 3, 4, 3, 2, 1, 5],
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(255,99,132,1)'],
        borderWidth: 1,
        fill: false,
        yAxisID: 'y-axis-2'
      }
    ],
},
options: {
    scales: {
        yAxes: [
          {
            type: 'linear',
            display: true,
            position: 'left',
            id: 'y-axis-1',
            ticks: { beginAtZero:true }
          },
          {
            type: 'linear',
            display: true,
            position: 'left',
            id: 'y-axis-2',
            ticks: { beginAtZero:true }
          }
        ]
    }
  }
});


})
