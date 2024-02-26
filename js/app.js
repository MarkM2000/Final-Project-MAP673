var map = L.map('map', {
    zoomSnap: .1,
    center: [35.233333, -75.530278],
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

// Create hotspots for lighthouses
var hotspots = [{
    name: "Bodie Island Lighthouse",
    properties: {
        location: "Bodie Island",
        coordinates: [35.818554, -75.563309],
        url: 'https://www.nps.gov/caha/planyourvisit/bils.htm',
        icon: '../svg/lighthouse-15.svg'
    }
}, {
    name: "Cape Hatteras Lighthouse",
    properties: {
        location: "A museum dedicated to space exploration and human aircraft flights",
        coordinates: [35.250533, -75.528806],
        url: 'https://www.nps.gov/caha/planyourvisit/chls.htm',
        icon: '../svg/lighthouse-15.svg',
    }
}];

// Create empty latLng bounds for zooming/centering map dynamically
var bounds = L.latLngBounds();

for (var i = 0; i < hotspots.length; i++) {
    var props = hotspots[i].properties;
    console.log(props);

    // assign a string, wrapping the name of the place within two HTML bold tags
    var popup = `<h3>${hotspots[i].name}</h3>
             <p>${props.description}</p>
             <p><b>website</b>: <a href='${props.url}'>${props.url}</a></p>
             `

    popup += props.phone ? `<p><b>phone</b>: ${props.phone}</p>` : "";

    var icon = L.icon({
        iconUrl: props.icon,
        iconSize: [40, 40],
        popupAnchor: [0, -22],
        className: "icon"
    });

    var marker = L.marker(hotspots[i].properties.coordinates, {
        icon: icon
    })
        .addTo(map)
        .bindPopup(popup);

    //  Extend the bounds as features are added
    bounds.extend(hotspots[i].properties.coordinates)

    marker.on("mouseover", function () {
        this.openPopup();
    });
    marker.on("mouseout", function () {
        this.closePopup();
    });
}

// Fit map to the extent of hotspots
map.fitBounds(bounds);

// variable to reference the zero index
var i = 0;
