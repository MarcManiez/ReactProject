const MainView = ({currentActivity}) => (
  <div>
    <div className='row main-view'>
      <div className="col-md-8">
        <ActivityDisplay currentActivity={currentActivity}/>
      </div>
      <div className="col-md-4 map-weather-col">
        <Map currentActivity={currentActivity}/>
        <Weather currentActivity={currentActivity}/>
      </div>
    </div>
  </div>
);