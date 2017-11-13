/**
 * Front-end side city data process, not used in this app
 */

let rawCities;
let filterJson;
let filter;
let selectedCities=[];


let citiesFilter = (rawjson, filter) =>{
    console.log(filter);
    if(rawjson){
        rawjson.forEach(element => {
            // console.log(element.name);
            filter.forEach(e => {
                if(e == element.name){
                    selectedCities.push(element)
                    // console.log(element);
                }
                
            })
        });
    }
    console.log(selectedCities);
}

let initData = () => {
    loadJSON(function (response) {
        // Parse JSON string into object
        rawCities = JSON.parse(response);
        // console.log(rawCities);
        citiesFilter(rawCities,filter);
        
    });
}


let loadFilter = () => {
    loadFilterJSON(function (response) {
        // Parse JSON string into object
        filterJson = JSON.parse(response);
        filter = filterJson.cities;
        
    });
}

let loadJSON = (callback) => {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'cities.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

let loadFilterJSON = (callback) => {
    
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', 'citiesFilter.json', true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    }