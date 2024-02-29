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

var iconhotels = L.icon({
    iconUrl: "../svg/monument-15.svg",
    iconSize: [20, 20],
    popupAnchor: [0, -22],
    className: "icon"
});

// Start CSV layers
function drawMap(data) {
    const options = {
        pointToLayer: function (feature, ll) {
            return L.marker(ll, {
                icon: iconhotels
            });
        },
        onEachFeature: function (feature, layer) {
            const props = feature.properties

            // assign a string, wrapping the name of the place within two HTML bold tags
            var popup = `<h3>${feature.properties.NAME}</h3>
    <p>${props.NAME}</p>
    <p>${props.ADDRESS}</p>
    <p>${props.AREA}</p>
    <p><b>URL</b>: <a href='${props.url}'>Visit website</a></p>
`

            layer.bindTooltip(popup);
            console.log(feature.properties)

            console.log(feature.properties.ADDRESS)

            console.log(feature.properties.URL)
        }
    };

    // create a separate layer from GeoJSON data
    const hotels = L.geoJson(data, options).addTo(map);
} // end drawMap()

var hotels = L.geoJson(hotels, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#613c33',
            weight: 1,
            fillColor: '#613c33',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        layer.bindTooltip(layer.feature.properties.name);

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: 'red'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#613c33'
            });
        });
    }
}).addTo(map);
