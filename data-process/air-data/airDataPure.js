/**
 * process selected api data into the format that globle.js can use
 */
const fs = require('fs');

let air;
let finalData;

let showData = [
    [
        'airPollution', []
    ]
]

fs.readFile('./preData.json', 'utf8', function (err, data) {

    if (err) throw err; // we'll not consider error handling for now
    air = JSON.parse(data);
    pure(air);
    

});


let pure = (airData) => {

    airData.forEach(element => {
        if (element.status == "success" && element.data.current.pollution.aqius) {
            showData[0][1].push(element.data.location.coordinates[1]);
            showData[0][1].push(element.data.location.coordinates[0]);
            showData[0][1].push(element.data.current.pollution.aqius);
        }
    });

    fs.writeFileSync('showData.json', JSON.stringify(showData, null, 4), 'utf-8');

}