let maPosition;
let inputLocalisation = document.getElementById("localisation");
let inputCarte = document.getElementById("carte");
let infos = document.getElementById("infos");

var map = L.map("map").setView([43.613891633564954, 3.823617777509016], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

inputLocalisation.onclick = function () {
  navigator.geolocation.getCurrentPosition(function (position) {
    maPosition = position;
    console.table(maPosition.coords);

    infos.innerHTML = `Position: ${maPosition.coords.latitude},
    ${maPosition.coords.longitude}`;
  });
};

inputCarte.onclick = function () {
  let lat = maPosition.coords.latitude;
  let lng = maPosition.coords.longitude;

  var marker = L.marker([lat, lng]).addTo(map);
  map.panTo(new L.LatLng(lat, lng));

  marker.bindPopup("Je suis la !");
};
