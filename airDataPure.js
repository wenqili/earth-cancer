console.log("this is pure");
let air;
let finalData;
let showData = [
    [
    'airPollution', []
    ]
]

let loadAir = () => {
    loadAirJSON(function (response) {
        // Parse JSON string into object
        air = JSON.parse(response);
        console.log(air);
        pure(air);

    });
}


let loadAirJSON = (callback) => {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'preData.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

let pure = (airData) =>{
    airData.forEach(element => {
        if(element.status == "success"&& element.data.current.pollution.aqius){
            showData[0][1].push(element.data.location.coordinates[1]);
            showData[0][1].push(element.data.location.coordinates[0]);
            showData[0][1].push(element.data.current.pollution.aqius);
            // console.log()            
        }
    }); 
}