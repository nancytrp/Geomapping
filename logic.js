// Create a map object
var myMap = L.map("map", {
    center: [35.481918, -97.508469],
    zoom: 4
  });

  // Add a tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(myMap);
  
// API URL
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"

// Fetch data and create a dictionary
var dict = [];
var tmp = {};

d3.json(url,function(response) {
//  console.log(response);
//  console.log(response.features.length);
  for (var i = 0; i < response.features.length; i++) {
  var title = response.features[i].properties.title
  var lat = response.features[i].geometry.coordinates[1]
  var lon = response.features[i].geometry.coordinates[0]

  tmp['title'] = title;
  tmp['lat'] = lat;
  tmp['lon'] = lon;

  dict.push(tmp);
  // console.log(tmp);
  // console.log(dict);
  // console.log(JSON.stringify(dict));

// Create a new marker cluster group
var markers = L.markerClusterGroup();

// Add a new marker to the cluster group and bind a pop-up
markers.addLayer(L.marker([response.features[i].geometry.coordinates[1],response.features[i].geometry.coordinates[0] ])
.bindPopup(response.features[i].properties.title));    

// Add our marker cluster layer to the map
myMap.addLayer(markers)

}
});


