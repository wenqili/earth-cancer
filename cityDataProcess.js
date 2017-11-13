var curl = require("curl")

// curl.get('http://api.airvisual.com/v2/nearest_city?lat=35.98&lon=140.33&key=758hNwezn6uJHZi7t'
// , function(err, response, body) {
//     console.log(response);
// });


var fs = require('fs');


let rawCities;
let filterJson;
// let filter;
let selectedCities=[];



fs.readFile('cities.json', 'utf8', function (err, data) {
    if (err) throw err; // we'll not consider error handling for now
    rawCities = JSON.parse(data);

    fs.readFile('citiesFilter.json', 'utf8', function (err, data) {
        if (err) throw err; // we'll not consider error handling for now
        filterJson = JSON.parse(data);
        citiesFilter(rawCities,filterJson.cities);
        
    });
});





let citiesFilter = (rawjson, filter) =>{
    if(rawjson){
        console.log(filter);
        rawjson.forEach(element => {
            // console.log(element.name);
            
            for(let i = 0; i < filter.length; i++){
            // console.log(filter)
            // filter.forEach(e => {
                if(filter[i] == element.name){
                    selectedCities.push(element)
                    // console.log(element);
                }
            }
        });
    }
    console.log(selectedCities);
    fs.writeFileSync('filteredData.json', JSON.stringify(selectedCities, null, 4), 'utf-8');
    

  
}

