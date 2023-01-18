const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=480b047be1ec6a73da5955fcd85a5d69&query=' + latitude + ',' + longitude + '&units=f';

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect  to weather service!', undefined);
        }
        else if(body.error){
            callback('Unable to find location', undefined);
        }
        else{
            const current = body.current;
            callback(undefined, current.weather_descriptions[0] + '. It is currently ' + current.temperature + ' degress out. It feels like ' + current.feelslike + ' degress out. Humidity is ' + current.humidity + '%' )
        }
    })

}

module.exports = forecast;