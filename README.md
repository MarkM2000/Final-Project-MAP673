# final-project-map673
This repository will be the final project for MAP 673.

Project Title: Outer Banks

# Purpose
The purpose of my project will be to use what I have done in the past 3 mockups and apply it to this project. The Outer Banks in North Carolina will be the main focus of this project. This map will feature three SVG (Scalable Vector Graphics) icons including a lighthouse svg, a customized hotel svg, and attraction svg. 

You will likely have to Zoom on the map if you want to view a specific area on the map such as the Jennette's Pier.

# Ways the map was created
Created a ```outer-banks-hotels.csv``` file along with ```app.js``` and ```hotspots.js``` files.

Got the ```app.js``` and ```hotspots.js``` files set up by using ```<script src="/js/app.js"></script>``` and ```<script src="/js/hotspots.js"></script>```.

Used the omnivore.csv feature on the ```app.js``` file. It looks something like this and it includes the ```outer-banks-hotels.csv``` file:

```
omnivore.csv("csv/outer-banks-hotels.csv")
    .on("ready", function (e) {
        drawMap(e.target.toGeoJSON());
    })
    .on("error", function (e) {
        console.log(e.error[0].message);
    });

var iconhotels = L.icon({
    iconUrl: "../svg/hotel.svg",
    iconSize: [20, 20],
    popupAnchor: [0, -22],
    className: "icon"
});
```

On the ```hotspots.js``` file, I added a ```var hotspots``` variable to set up the lighthouses, hotels, and attractions. The ```var hotspots``` file looks something like this (this is the hotspots variable that was used to create the lighthouses):

```
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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Ocracoke_-_Ocracoke_Light_-_20140731184254.jpg/256px-Ocracoke_-_Ocracoke_Light_-_20140731184254.jpg",
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
```

After having the ```var hotspots``` variable, I created a empty latLng bounds feature, ```var icon```, ```var marker```, and ```var popup``` features. This example is used for the lighthouses hotspot variable:
```
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
}
```

To access the link to this project, click on <a href="https://markm2000.github.io/Final-Project-MAP673/">this link</a>.