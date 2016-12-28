const coordinates = {};

$.getJSON('http://ip-api.com/json', function(json) {
  coordinates.lat = json.lat;
  coordinates.lon = json.lon;
});

navigator.geolocation.getCurrentPosition(function(position) {
  coordinates.lat = position.coords.latitude;
  coordinates.lon = position.coords.longitude;
});