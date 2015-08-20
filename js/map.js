$( document ).ready(function() {

  var map = L.map('map', {
    zoomControl: false
  }).setView([35, 139], 5);

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

});
