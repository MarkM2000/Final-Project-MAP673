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
        location: "Hatteras Island",
        coordinates: [35.250533, -75.528806],
        url: 'https://www.nps.gov/caha/planyourvisit/chls.htm',
        icon: '../svg/lighthouse-15.svg',
    }
}, {
    name: "Ocracoke Lighthouse",
    properties: {
        location: "Ocracoke Island",
        coordinates: [35.108982, -75.986032],
        url: 'https://www.nps.gov/caha/planyourvisit/ols.htm',
        icon: '../svg/lighthouse-15.svg',
    }
}, {
    name: "Currituck Beach Lighthouse",
    properties: {
        location: "Corolla",
        coordinates: [36.376668, -75.830656],
        url: 'https://www.visitcurrituck.com/places/currituck-beach-light-house/',
        icon: '../svg/lighthouse-15.svg',
    }
}, {
    name: "Cape Lookout Lighthouse",
    properties: {
        location: "Cape Lookout",
        coordinates: [34.622742, -76.524529],
        url: 'https://www.nps.gov/calo/index.htm',
        icon: '../svg/lighthouse-15.svg',
    }
}, {
    name: "Roanoke Marshes Lighthouse",
    properties: {
        location: "Manteo",
        coordinates: [35.9082116, -75.6682721],
        url: 'https://www.manteonc.gov/visitors/roanoke-marshes-lighthouse',
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
             <p>${props.location}</p>
             <p><b>Url</b>: <a href='${props.url}'>${props.url}</a></p>
             `

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