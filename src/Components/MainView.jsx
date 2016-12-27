const MainView = () => (
  <div>
    <div className='row main-view'>
      <div className="col-md-8">
        <ActivityDisplay />
      </div>
      <div className="col-md-4 map-weather-col">
        <Map />
        <Weather />
      </div>  
    </div>  
  </div>
);