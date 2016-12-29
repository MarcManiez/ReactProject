const Map = (props) => (
    !props.currentActivity ? <div className='map'>Map loading...</div> :
    <div className="map">
      <iframe
      width={$('.map').width()}
      height={$('.map').height()}
      src={`//www.google.com/maps/embed/v1/place?q=${props.currentActivity.lat},${props.currentActivity.lon}&zoom=14&maptype=satellite&key=${credentials.mapsKey}`}></iframe>
    </div>
  );