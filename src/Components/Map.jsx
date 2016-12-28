const Map = (props) => (
  <div className='map'>
    {getMap(props.currentActivity)}
  </div>
);