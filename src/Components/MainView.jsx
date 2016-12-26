const MainView = () => (
  <div>
    <div className='row'>
      <div className="col-md-8">
        <ActivityDisplay />
      </div>
      <div className="col-md-4">
        <Map />
        <Weather />
      </div>  
    </div>  
  </div>
);