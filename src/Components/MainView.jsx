class MainView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className='row main-view'>
          <div className="col-md-8">
            <ActivityDisplay currentActivity={this.props.currentActivity}/>
          </div>
          <div className="col-md-4 map-weather-col">
            <Map currentActivity={this.props.currentActivity}/>
            <Weather currentActivity={this.props.currentActivity}/>
          </div>
        </div>
      </div>
    );
  }
}

