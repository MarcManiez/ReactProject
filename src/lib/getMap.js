const getMap = function(lat, lon) {
  return function() {
    console.log('Google maps api is live!');
    const map = new google.maps.Map($('.map'), {
      center: {lat: lat, lng: lon},
      zoom: 8
    });
  }
};