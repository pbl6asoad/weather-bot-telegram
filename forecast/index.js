const request = require('request');

const forecast = (lat, lon, callback) => {
  debugger
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d257e132e5e4424385efef4409ce2d79&units=metric`
  debugger
  request({
    url,
    json: true
  }, (err, { body } = {}) => { 
    
    if(err){
      debugger
      callback('Error')
    } else if(body.cod >= 400){
      debugger
      callback('Unable to connect to server');
    }
    else{
      debugger
      callback(undefined, body)
    }
  })
}

module.exports = {
  forecast
}