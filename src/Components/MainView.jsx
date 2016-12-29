class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherInfo: null
    };
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.currentActivity) return
    $.getJSON(`http://api.openweathermap.org/data/2.5/weather?lat=${nextProps.currentActivity.lat}&lon=${nextProps.currentActivity.lon}&units=imperial&appid=6aacd398ae4803d7a0bf312facdbfaef`, (json) => {
      this.setState({
        weatherInfo: {
          weather: json.weather[0].description,
          temperature: json.main.temp.toFixed(1)
        }
      });
    }); // refactor this into a different file
    // if (nextProps.currentActivity) {
    //   getImage(nextProps.currentActivity.name);
    // }
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
            <Weather weatherInfo={this.state.weatherInfo}/>
          </div>
        </div>
      </div>
    );
  }
}

