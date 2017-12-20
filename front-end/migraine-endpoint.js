
"migraine_API": {
  "intensity": 1,
  "triggers": ["alcohol", "food"],
  "water":
  "journal": "Lorem ipsum dolor sit amet."
}


const APP_ID = 'f9028ce0e04f945b512e9f393e22ab91'
const API_BASE_URL = '//api.openweathermap.org/data/2.5'

var owm = {}

owm.getWeather = function (options) {
  if (!options || !options.city) {
    return Promise.reject(new Error('Option `city` is required'))
  }

  return jQuery.ajax(API_BASE_URL + '/weather', {
    data: {
      units: 'imperial',
      q: options.city,
      APPID: APP_ID
    }
  })
}

owm.getForecast = function (options) {
  if (!options || !options.city) {
    return Promise.reject(new Error('Option `city` required'))
  }
  return jQuery.ajax(API_BASE_URL + '/forecast', {
    data: {
      units: 'imperial',
      q: options.city,
      APPID: APP_ID
    }
  })
}
