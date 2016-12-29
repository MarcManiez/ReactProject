const Weather = (props) => (
  !props.weatherInfo ? <div className='weather'>Weather loading...</div> :
  <div className='weather'>
    <h3>Weather</h3>
    <p>{props.weatherInfo.weather} and {props.weatherInfo.temperature}°F</p>
  </div>
);