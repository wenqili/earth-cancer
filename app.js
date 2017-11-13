// Where to put the globe?


window.onload = function(){
    loadAir();
    
    init();
    // loadFilter();
    // initData();
    
};



function init(){
    var container = document.getElementById( 'container' );
    

    // Make the globe
var globe = new DAT.Globe( container );

// We're going to ask a file for the JSON data.
var xhr = new XMLHttpRequest();

// Where do we get the data?
xhr.open( 'GET', 'preData.json', true );

// What do we do when we have it?
xhr.onreadystatechange = function() {

    // If we've received the data
    if ( xhr.readyState === 4 && xhr.status === 200 ) {

        // Parse the JSON
        // var data = JSON.parse( xhr.responseText );
        // var data = [
        //     [
        //     'seriesA', [ 6, 159, 0.001, 30, 99, 0.002, 45, -109, 0.000, 42, 115, 0.007]
        //     ]
        // ]

        // Tell the globe about your JSON data
        for ( var i = 0; i < showData.length; i ++ ) {
            globe.addData( showData[i][1], {format: 'magnitude', name: showData[i][0]} );
        }

        // Create the geometry
        globe.createPoints();

        // Begin animation
        globe.animate();

    }

};

// Begin request
xhr.send( null );
}