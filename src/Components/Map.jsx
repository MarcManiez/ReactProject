const Map = (props) => {
  // if (props.currentActivity) {
  //   const initMap = getMap(props.currentActivity.lat, props.currentActivity.lon);
  // }
  return (
    !props.currentActivity ? <div className='map'>Map loading...</div> :
    <div className="map">
      <iframe src={`//www.google.com/maps/embed/v1/place?q=Harrods,Brompton%20Rd,%20UK&zoom=17&key=${credentials.mapsKey}`}></iframe>
    </div>
  );
};

    // <div className="map">
    //   <div id="map"></div>
    //   <script>
    //     function initMap() {
    //       var uluru = {lat: -25.363, lng: 131.044};
    //       var map = new google.maps.Map(document.getElementById('map'), {
    //         zoom: 4,
    //         center: uluru
    //       });
    //       var marker = new google.maps.Marker({
    //         position: uluru,
    //         map: map
    //       });
    //     }
    //   </script>
    //   <script src={`https://maps.googleapis.com/api/js?key=${credentials.mapsKey}&callback=initMap`} async defer></script>
    // </div>