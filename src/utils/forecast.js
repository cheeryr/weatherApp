const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/d4a9d16a5b84ebd321ec186adfb6849d/' + latitude + ',' + longitude + '?units=si'
    console.log(url);
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'Summary: '+ body.daily.data[0].summary+
                '<br>Current Temperature: '+ body.currently.temperature + ' degree' +
                '<br>Chance of Rain: '+ body.currently.precipProbability + '%' +
                '<br>Humidity: ' + body.currently.humidity+ 
                '<br>Wind Speed: ' + body.currently.windSpeed + 'km/h' +
                '<br>Temperatur High: '+ body.daily.data[0].temperatureHigh + ' degree' +
                '<br>Temperatur Low: ' + body.daily.data[0].temperatureLow + ' degree'

            );
        }
    })
}

module.exports = forecast