var map = L.map('map', {
    zoomSnap: .1,
    center: [35.3737, -75.4953],
    zoom: 10,
    minZoom: 6,
});

// mapbox API parameters
const accessToken = `pk.eyJ1IjoibWFya20wMCIsImEiOiJjbHMzbXhmcDAwMDA0MnBucmp0YTI2dHN0In0.Ns7cziMPFHfQp-GBe_MWig`
const yourName = 'markm00'
const yourMap = 'clsmdvehq042801p21h468tcz'

// request a mapbox raster tile layer and add to map
L.tileLayer(`https://api.mapbox.com/styles/v1/${yourName}/${yourMap}/tiles/256/{z}/{x}/{y}?access_token=${accessToken}`, {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, and <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

// Omnivore CSV file 
omnivore.csv("csv/outer-banks-hotels.csv")
    .on("ready", function (e) {
        drawMap(e.target.toGeoJSON());
    })
    .on("error", function (e) {
        console.log(e.error[0].message);
    });

// Start CSV layers
function drawMap(data) {
    const options = {
        pointToLayer: function (feature, ll) {
            return L.circleMarker(ll, {
                opacity: 1,
                weight: 2,
                fillOpacity: 0,
            });
        },
        onEachFeature: function (feature, layer) {
            layer.bindTooltip(layer.feature.properties.NAME);

            console.log(feature.properties)
        }
    };

    // create a separate layer from GeoJSON data
    const hotels = L.geoJson(data, options).addTo(map);
} // end drawMap()

function drawLegend(data) {
    // Loop through all schools to get all values
    // Sort results
    // Calculate the largest diameter
    // Modify the CSS rules in the legend Leaflet control to draw two circles
    // Draw labels
}