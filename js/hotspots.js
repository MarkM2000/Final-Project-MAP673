// Create hotspots for lighthouses
var hotspots = [{
    name: "Bodie Island Lighthouse",
    properties: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bodie_Island_Lighthouse_2008.JPG/330px-Bodie_Island_Lighthouse_2008.JPG",
        location: "Bodie Island",
        coordinates: [35.818554, -75.563309],
        url: 'https://www.nps.gov/caha/planyourvisit/bils.htm',
        icon: 'svg/lighthouse-15.svg'
    }
}, {
    name: "Cape Hatteras Lighthouse",
    properties: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Cape_Hatteras_Light_Station_%28Lighthouse%29%2C_Cape_Hatteras_National_Seashore%2C_Buxton%2C_North_Carolina_%2814268129090%29.jpg/330px-Cape_Hatteras_Light_Station_%28Lighthouse%29%2C_Cape_Hatteras_National_Seashore%2C_Buxton%2C_North_Carolina_%2814268129090%29.jpg",
        location: "Hatteras Island",
        coordinates: [35.250533, -75.528806],
        url: 'https://www.nps.gov/caha/planyourvisit/chls.htm',
        icon: 'svg/lighthouse-15.svg',
    }
}, {
    name: "Ocracoke Lighthouse",
    properties: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Ocracoke_Light%2C_on_North_Carolinas%27s_Outer_Banks%2C_by_Carol_M._Highsmith%2C_2017%2C_from_the_Library_of_Congress_-_iiif-service_pnp_highsm_44700_44771-full-pct_25-0-default.jpg/330px-thumbnail.jpg",
        location: "Ocracoke Island",
        coordinates: [35.108982, -75.986032],
        url: 'https://www.nps.gov/caha/planyourvisit/ols.htm',
        icon: 'svg/lighthouse-15.svg',
    }
}, {
    name: "Currituck Beach Lighthouse",
    properties: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Currituck_Beach_Light.JPG/330px-Currituck_Beach_Light.JPG",
        location: "Corolla",
        coordinates: [36.376668, -75.830656],
        url: 'https://www.visitcurrituck.com/places/currituck-beach-light-house/',
        icon: 'svg/lighthouse-15.svg',
    }
}, {
    name: "Cape Lookout Lighthouse",
    properties: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Cape_Lookout_Lighthouse_image_9.jpg/330px-Cape_Lookout_Lighthouse_image_9.jpg",
        location: "Cape Lookout",
        coordinates: [34.622742, -76.524529],
        url: 'https://www.nps.gov/calo/index.htm',
        icon: 'svg/lighthouse-15.svg',
    }
}, {
    name: "Roanoke Marshes Lighthouse",
    properties: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Reconstructed_Roanoke_Marshes_Light_on_the_Waterfront_of_Manteo%2C_Roanoke_Island%2C_North_Carolina_%2814437446626%29.jpg/330px-Reconstructed_Roanoke_Marshes_Light_on_the_Waterfront_of_Manteo%2C_Roanoke_Island%2C_North_Carolina_%2814437446626%29.jpg",
        location: "Manteo",
        coordinates: [35.9082116, -75.6682721],
        url: 'https://www.manteonc.gov/visitors/roanoke-marshes-lighthouse',
        icon: 'svg/lighthouse-15.svg',
    }
}];

// Create empty latLng bounds for zooming/centering map dynamically
var bounds = L.latLngBounds();

for (var i = 0; i < hotspots.length; i++) {
    var props = hotspots[i].properties;

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
}


// variable to reference the zero index
var i = 0;

// Create hotspots for other attractions
var hotspots = [{
    name: "Wright Brothers National Memorial",
    properties: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/On_this_hill.jpg/330px-On_this_hill.jpg",
        location: "Kill Devil Hills",
        coordinates: [36.0143, -75.6679],
        information: "This granite monument honors the Wright Brothers, who conducted the first successful air flight.",
        url: 'https://www.nps.gov/wrbr/index.htm',
        icon: 'svg/attraction-15.svg'
    }
}, {
    name: "Jennette's Pier",
    properties: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Jennette%27s_Pier-3761_%2837194043261%29.jpg/960px-Jennette%27s_Pier-3761_%2837194043261%29.jpg",
        location: "Nags Head",
        coordinates: [35.910065, -75.595580],
        information: "This eco-friendly pier allows fishers to rent equipment and other supplies and offers fishing lessons.",
        url: 'https://www.ncaquariums.com/jennettes-pier',
        icon: 'svg/attraction-15.svg',
    }
}, {
    name: "North Carolina Aquarium on Roanoke Island",
    properties: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/NC_Aquarium_at_Roanoke_Island.jpg/330px-NC_Aquarium_at_Roanoke_Island.jpg",
        location: "Manteo",
        coordinates: [35.91757, -75.70392],
        information: "Come visit this aquarium on Roanoke Island in Manteo and visit the exhibits and fun experiences.",
        url: 'https://www.ncaquariums.com/roanoke-island',
        icon: 'svg/attraction-15.svg',
    }
}, {
    name: "Jockey's Ridge State Park",
    properties: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/JockeysRidge.wmg.jpg/330px-JockeysRidge.wmg.jpg",
        location: "Nags Head",
        coordinates: [35.9627, -75.6340],
        information: "Visit this National Natural Landmark (NNL)-designated sand dunes park in the Nags Head area that features the tallest sand dune on the Atlantic Coast.",
        url: 'https://www.ncparks.gov/state-parks/jockeys-ridge-state-park',
        icon: 'svg/attraction-15.svg',
    }
}, {
    name: "Chicamacomico Life-Saving Station",
    properties: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Outer_Banks_Scenic_Byway_-_Chicamacomico_Life-Saving_Station_Historic_Site_and_Museum_-_NARA_-_7720864.jpg/330px-Outer_Banks_Scenic_Byway_-_Chicamacomico_Life-Saving_Station_Historic_Site_and_Museum_-_NARA_-_7720864.jpg",
        location: "Rodanthe",
        coordinates: [35.59569, -75.46632],
        information: "Visit this former station-turned museum on Hatteras Island.",
        url: 'https://chicamacomico.org',
        icon: 'svg/attraction-15.svg',
    }
}];

// var bounds = L.latLngBounds();

for (var i = 0; i < hotspots.length; i++) {
    var props = hotspots[i].properties;

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


// Fit map to the extent of hotspots
map.fitBounds(bounds, {
    animate: false,
    padding: [50, 50]
});