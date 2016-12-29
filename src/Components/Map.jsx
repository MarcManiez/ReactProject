const Map = ({currentActivity}) => (
    !currentActivity ? <div className='map'>Map loading...</div> :
    <div className="map">
      <iframe
      width={$('.map').width()}
      height={$('.map').height()}
      src={`//www.google.com/maps/embed/v1/place?q=${currentActivity.lat},${currentActivity.lon}&zoom=14&maptype=satellite&key=${credentials.mapsKey}`}></iframe>
    </div>
  );