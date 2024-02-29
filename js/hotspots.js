// Create hotspots for lighthouses
var hotspots = [{
    name: "Bodie Island Lighthouse",
    properties: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Bodie_Island_Lighthouse%2C_Cape_Hatteras_National_Seashore%2C_Outer_Banks%2C_North_Carolina_%2814432018464%29.jpg/256px-Bodie_Island_Lighthouse%2C_Cape_Hatteras_National_Seashore%2C_Outer_Banks%2C_North_Carolina_%2814432018464%29.jpg",
        location: "Bodie Island",
        coordinates: [35.818554, -75.563309],
        url: 'https://www.nps.gov/caha/planyourvisit/bils.htm',
        icon: '../svg/lighthouse-15.svg'
    }
}, {
    name: "Cape Hatteras Lighthouse",
    properties: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Cape_Hatteras_Light_Station_%28Lighthouse%29%2C_Cape_Hatteras_National_Seashore%2C_Buxton%2C_North_Carolina_%2814268137700%29.jpg/256px-Cape_Hatteras_Light_Station_%28Lighthouse%29%2C_Cape_Hatteras_National_Seashore%2C_Buxton%2C_North_Carolina_%2814268137700%29.jpg",
        location: "Hatteras Island",
        coordinates: [35.250533, -75.528806],
        url: 'https://www.nps.gov/caha/planyourvisit/chls.htm',
        icon: '../svg/lighthouse-15.svg',
    }
}, {
    name: "Ocracoke Lighthouse",
    properties: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Ocracoke_Lighthouse_%2828698468638%29.jpg/256px-Ocracoke_Lighthouse_%2828698468638%29.jpg",
        location: "Ocracoke Island",
        coordinates: [35.108982, -75.986032],
        url: 'https://www.nps.gov/caha/planyourvisit/ols.htm',
        icon: '../svg/lighthouse-15.svg',
    }
}, {
    name: "Currituck Beach Lighthouse",
    properties: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Currituckbeachlight.jpg/256px-Currituckbeachlight.jpg",
        location: "Corolla",
        coordinates: [36.376668, -75.830656],
        url: 'https://www.visitcurrituck.com/places/currituck-beach-light-house/',
        icon: '../svg/lighthouse-15.svg',
    }
}, {
    name: "Cape Lookout Lighthouse",
    properties: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Cape_Lookout_Lighthouse.jpg/256px-Cape_Lookout_Lighthouse.jpg",
        location: "Cape Lookout",
        coordinates: [34.622742, -76.524529],
        url: 'https://www.nps.gov/calo/index.htm',
        icon: '../svg/lighthouse-15.svg',
    }
}, {
    name: "Roanoke Marshes Lighthouse",
    properties: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Roanoke_Marshes_Light_Replica%2C_Manteo%2C_NC._%28Remake%29.jpg/256px-Roanoke_Marshes_Light_Replica%2C_Manteo%2C_NC._%28Remake%29.jpg",
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
    <img src='${props.image}'>
    <p>${props.location}</p>
    <p><b>URL</b>: <a href='${props.url}'>Link</a></p>
`

    var icon = L.icon({
        iconUrl: props.icon,
        iconSize: [20, 20],
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

// Create hotspots for other attractions
var hotspots = [{
    name: "Wright Brothers National Memorial",
    properties: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/First_Flight_Memorial_5.jpg/256px-First_Flight_Memorial_5.jpg",
        location: "Kill Devil Hills",
        coordinates: [36.0143, -75.6679],
        information: "This granite monument honors the Wright Brothers, who conducted the first successful air flight.",
        url: 'https://www.nps.gov/wrbr/index.htm',
        icon: '../svg/monument-15.svg'
    }
}, {
    name: "Jennette's Pier",
    properties: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Cape_Hatteras_Light_Station_%28Lighthouse%29%2C_Cape_Hatteras_National_Seashore%2C_Buxton%2C_North_Carolina_%2814268137700%29.jpg/256px-Cape_Hatteras_Light_Station_%28Lighthouse%29%2C_Cape_Hatteras_National_Seashore%2C_Buxton%2C_North_Carolina_%2814268137700%29.jpg",
        location: "Nags Head",
        coordinates: [35.910065, -75.595580],
        url: 'https://www.ncaquariums.com/jennettes-pier',
        icon: 'https://icons8.com/icon/VDl_WNB3ew7x/pier',
    }
}];

var bounds = L.latLngBounds();

for (var i = 0; i < hotspots.length; i++) {
    var props = hotspots[i].properties;
    console.log(props);

    // assign a string, wrapping the name of the place within two HTML bold tags
    var popup = `<h3>${hotspots[i].name}</h3>
    <img src='${props.image}'>
    <p>${props.location}</p>
    <p>${props.information}</p>
    <p><b>URL</b>: <a href='${props.url}'>Link</a></p>
`

    var icon = L.icon({
        iconUrl: props.icon,
        iconSize: [20, 20],
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
}