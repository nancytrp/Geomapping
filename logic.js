// Create a map object
var myMap = L.map("map", {
    center: [35.481918, -97.508469],
    zoom: 5
  });

  // Add a tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(myMap);
  
 //------------------------------------------------- 

// API URL
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"
console.log(url);

d3.json(url,function(response) {
    console.log(response);
//});

//Primer elemento del Json
console.log("response.metadata");
 console.log(response.metadata);
 console.log("response.metadata.count");
 console.log(response.metadata.count);

console.log("response.features");

console.log(response.features);

console.log("response.features.length");
console.log(response.features.length);
featuresData = response.features
 for (var i = 0; i < featuresData.length; i++) {
      var feature =featuresData[i];
      console.log("feature.id");
      console.log(feature.id);
      console.log("feature.geometry.coordinates[0]");
      for (var j = 0; j < feature.geometry.coordinates.length; j++) {
        console.log(j);
        console.log(feature.geometry.coordinates[j]);
      }
      console.log(feature.geometry.coordinates[0]);
  }
});




// // Grab the data with d3
// d3.json(url, function(response) {

//   // Create a new marker cluster group
//   var markers = L.markerClusterGroup();

//   // Loop through data
//   for (var i = 0; i < response.length; i++) {

//     // Set the data location property to a variable
//     //var location = response[i].location;
//     var type = response[i].type.geometry;
    
//     // Check for location property
//     if (type) {

//       // Add a new marker to the cluster group and bind a pop-up
//       markers.addLayer(L.marker([type.coordinates[1], type.coordinates[0]])
//         .bindPopup(response[i].descriptor));
//         console.log(response[i].descriptor);
//     }

//   }

//   // Add our marker cluster layer to the map
//   myMap.addLayer(markers)

// });