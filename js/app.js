// Fit page to window
// fitLayout();

// window.addEventListener("resize", fitLayout);

function fitLayout() {
  // set global variables for header, map container, and footer
  const header = document.querySelector("#content");
  const mapContainer = document.querySelector("#map");

  // set map height to fill window
  mapContainer.style.height =
    window.innerHeight - header.offsetHeight + "px";
}

var map = L.map('map', {
    zoomSnap: .1,
    center: [35.3737, -75.4953],
    zoom: 10,
    minZoom: 6,
});

// mapbox API parameters
const accessToken = `pk.eyJ1IjoibWFya20wMCIsImEiOiJjbTFrM2FqZGwwdWFnMmtvY2FlNDFwdWZyIn0.2Z-bz-XInRuh_d5KIW_mrQ`
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
    iconUrl: "svg/hotel.svg",
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

            layer.bindPopup(popup);
        }
    };

    // create a separate layer from GeoJSON data
    const hotels = L.geoJson(data, options).addTo(map);
} // end drawMap()