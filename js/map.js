$( document ).ready(function() {

  navigator.geolocation.getCurrentPosition(zoomToLocation, locationError);

  function zoomToLocation(location) {
    var map = L.map('map', {
      zoomControl: false
    }).setView([location.coords.latitude, location.coords.longitude], 16);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }

  function locationError(error) {
    var map = L.map('map', {
      zoomControl: false
    }).setView([35, 139], 5);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }

});
