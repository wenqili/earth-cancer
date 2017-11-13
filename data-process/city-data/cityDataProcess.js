/*
    cities.json: all cities with geo info like lat and lon
    citiesFilter.json: selected cities
    filteredData.json: result of selected cities with geo info
*/

const curl = require("curl")
const fs = require('fs');

let rawCities;
let filterJson;
let selectedCities = [];

fs.readFile('cities.json', 'utf8', function (err, data) {

    if (err) throw err; // we'll not consider error handling for now
    rawCities = JSON.parse(data);

    fs.readFile('citiesFilter.json', 'utf8', function (err, data) {

        if (err) throw err; // we'll not consider error handling for now
        filterJson = JSON.parse(data);
        
        citiesFilter(rawCities, filterJson.cities);
    
    });

});


let citiesFilter = (rawjson, filter) => {

    if (rawjson) {

        rawjson.forEach(element => {

            for (let i = 0; i < filter.length; i++) {

                if (filter[i] == element.name) {
                
                    selectedCities.push(element)
                
                }
            
            }

        });

    }

    console.log(selectedCities);

    fs.writeFileSync('filteredData.json', JSON.stringify(selectedCities, null, 4), 'utf-8');
    
}