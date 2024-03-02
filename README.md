# final-project-map673
This repository will be the final project for MAP 673.

Project Title: Outer Banks

# Purpose
The purpose of my project will be to use what I have done in the past 3 mockups and apply it to this project. The Outer Banks in North Carolina will be the main focus of this project. This map will feature three SVG (Scalable Vector Graphics) icons including a lighthouse svg, a customized hotel svg, and attraction svg. 

You will likely have to Zoom on the map if you want to view a specific area on the map such as the Jennette's Pier.

# Ways the map was created

Used the omnivore.csv feature.

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