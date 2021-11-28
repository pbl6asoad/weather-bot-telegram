const request = require('request');

const geocode = (address, callback) => {
  if(!address) {
    return console.log('Please provide a valid address')
  }
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?limit=1&access_token=pk.eyJ1IjoicGJsNmFzb2FkIiwiYSI6ImNrd2NkYnN1ZzBhNTMybm4xc3E3eXBnYWYifQ.wty_-UFNh-yyZ_pL-98I_g'

  request({
    url,
    json: true
  }, (err, { body } = { }) => {
    debugger
    if(err){
      debugger
      callback('Error')
    } else if(body.features.length === 0){
      debugger
      callback('No results')
    }
    else{
      debugger
      callback(undefined, {
        longtitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
        location: body.features[0].place_name
      })
    }
  })
}

module.exports = {
  geocode
}