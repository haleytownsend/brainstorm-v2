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

$('#entryBtn').click(function() {
  var triggers = new Array();
  $('input[name="triggers"]:checked').each(function() {
  triggers.push(this.value);
  });
  var water = $('input[name=glasses-of-water]:checked' ).val();
  var journal = $( '#journal' ).val();
  var inputs = [ intensity, triggers, water, journal ]
  console.log(inputs)
  postMigraineEntry(inputs)
})

function postMigraineEntry(inputs) {
  
}
