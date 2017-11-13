/**
 * fetch air pollution data from airvisual api
 */

const curl = require("curl")
const fs = require("fs")
var dataObj;
var airData = [];
var i = 0;

fs.readFile('filteredData.json', 'utf8', function (err, data) {

    if (err) throw err; // we'll not consider error handling for now
    dataObj = JSON.parse(data);
    callApi();

});


let callApi = () => {

    let lat = dataObj[i].lat;
    let lon = dataObj[i].lng;
    
    i++;
    
    curl.get(`http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=SG4ypkgr2DHFhbRaL`, function (err, response, body) {
        // console.log(body);
        // body.data.geo.lat = lat;
        // body.data.geo.lng = lng;

        let result = JSON.parse(body);
        airData.push(result);
        fs.writeFileSync('airData.json', JSON.stringify(airData, null, 4), 'utf-8'); //sometimes it return wrong gate 503, change the i and restart

    });

    if (i < dataObj.length) {
        
        setTimeout(function () {
            callApi();
        }, 20000);
    
    }
}