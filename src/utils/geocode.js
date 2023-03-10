const request = require('request')

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYmFkYXJzIiwiYSI6ImNsY281cTZqcTFnb2Ezcm1xcDFnanNnb3gifQ.u8WPDAZvA4Nw4otphIa8-g&limit=1'

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to location service!', undefined);
        }
        else if(body.features.length === 0){
            callback('Unable to find location. Try another search!', undefined);
        }
        else{
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geoCode