const Weather = ({weatherInfo}) => (
  !weatherInfo ? <div className='weather'>Weather loading...</div> :
  <div className='weather'>
    <h3>Weather</h3>
    <p>{weatherInfo.weather} and {weatherInfo.temperature}°F</p>
  </div>
);