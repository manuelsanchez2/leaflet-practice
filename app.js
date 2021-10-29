let map = L.map("map", {
  // true by default, false if you want a wild map
  sleep: true,
  // time(ms) for the map to fall asleep upon mouseout
  sleepTime: 500,
  // time(ms) until map wakes on mouseover
  wakeTime: 1000,
  // defines whether or not the user is prompted oh how to wake map
  sleepNote: true,
  // allows ability to override note styling
  sleepNoteStyle: { color: "blue" },
  wakeMessage: "Haz hover por aqui para que el mapa funcione",
  sleepButton: L.Control.sleepMapControl,
  // should hovering wake the map? (clicking always will)
  hoverToWake: true,
  // opacity (between 0 and 1) of inactive map
  sleepOpacity: 0.7,
}).setView([51, 10], 5);

// ?key=Crk0OPfqXhgk7osf8gYm

L.tileLayer(
  "https://api.maptiler.com/maps/bright/{z}/{x}/{y}.png?key=Crk0OPfqXhgk7osf8gYm",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    crossOrigin: true,
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 3,
    scrollWheelZoom: false,
  }
).addTo(map);

// Add one single icon to the map
// var leafletIcon = L.icon({
// iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-green.png",
//   });

// Create a class and add multiple icons at once

var LeafletIcon = L.Icon.extend({
  options: {
    shadowUrl: "https://leafletjs.com/examples/custom-icons/leaf-shadow.png",
    shadowSize: [50, 64],
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76],
  },
});

var greenIcon = new LeafletIcon({
  iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-green.png",
});

var redIcon = new LeafletIcon({
  iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-red.png",
});

var orangeIcon = new LeafletIcon({
  iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-orange.png",
});

var dLiving = L.icon({
  shadowSize: [50, 64],
  iconUrl: "./6.png",
  iconSize: [38, 38],
  iconAnchor: [22, 38],
  shadowAnchor: [4, 62],
  popupAnchor: [-3, -40],
});

var yellowPointer = L.icon({
  iconUrl: "./7.png",
  iconSize: [38, 38],
  iconAnchor: [22, 38],
  popupAnchor: [-3, -40],
});

var marker = L.marker([51.5, 10], { icon: greenIcon }).addTo(map);
// var marker2 = L.marker([51.5, 13], { icon: dLiving }).addTo(map);
var marker3 = L.marker([51.5, 17], { icon: yellowPointer }).addTo(map);
var marker4 = L.marker([49.5, 7], { icon: redIcon }).addTo(map);
marker.bindPopup("<b>Hey there!</b><br>I am actually living here!");
// marker2.bindPopup("<b>Hey there!</b><br>I am actually living here!");
marker3.bindPopup("<b>Hey there!</b><br>I am actually living here!");
marker4.bindPopup("<b>Hey there!</b><br>I am actually living here!");

// How to display a watermark / logo on the map
L.Control.Watermark = L.Control.extend({
  onAdd: function (map) {
    let img = L.DomUtil.create("img");
    img.src = "./watermark.png";
    img.style.width = "200px";
    return img;
  },
  onRemove: function (map) {},
});

L.control.watermark = function (opts) {
  return new L.Control.Watermark(opts);
};

// L.control.watermark({ position: "bottomleft" }).addTo(map);
L.control.watermark().addTo(map);

map.on("focus", function () {
  map.scrollWheelZoom.enable();
});
map.on("blur", function () {
  map.scrollWheelZoom.disable();
});
