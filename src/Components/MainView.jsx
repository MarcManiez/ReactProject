class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherInfo: null,
      imageURL: null
    };
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.currentActivity) return;
    getWeather.call(this, nextProps.currentActivity.lat, nextProps.currentActivity.lon);
    getImage.call(this, nextProps.currentActivity.name);
  }
  render() {
    return (
      <div>
        <div className='row main-view'>
          <div className="col-md-8">
            <ActivityDisplay imageURL={this.state.imageURL} currentActivity={this.props.currentActivity}/>
          </div>
          <div className="col-md-4 map-weather-col">
            <Map currentActivity={this.props.currentActivity}/>
            <Weather weatherInfo={this.state.weatherInfo}/>
          </div>
        </div>
      </div>
    );
  }
}

