const chai = require('chai');
const { app, closeServer } = require('../back-end/server');
const requestWeather = require('../back-end/open-weather-map')

chai.use(require('chai-http'));
chai.should();

describe('OpenWeatherMap integration', function() {
  it('Will send a request to the Open Weather Map API', function(){
    chai.request(app)
     .get('http://api.openweathermap.org/data/2.5/weather?q=portland&units=imperial&appid=431f20e3dec4bfcfd571665b88c0f488')
     .end(function(res) {
       res.should.have.status(200);
       res.should.be.an.object;
    });
  });
});


// describe('OpenWeatherMap integration', function() {
//   it('requests data from the Open Weather Map API', function(){
//
//   });
// });
