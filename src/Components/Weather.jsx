class Weather extends React.Component { // try to refactor as stateless component
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
      temperature: null
    }
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.currentActivity) return
    $.getJSON(`http://api.openweathermap.org/data/2.5/weather?lat=${nextProps.currentActivity.lat}&lon=${nextProps.currentActivity.lon}&units=imperial&appid=6aacd398ae4803d7a0bf312facdbfaef`, (json) => {
      this.setState({
        weather: json.weather[0].description,
        temperature: json.main.temp.toFixed(1)
      });
    }); // refactor this into a different file
    // if (nextProps.currentActivity) {
    //   getImage(nextProps.currentActivity.name);
    // }
  }
  render() {
    return (
      !this.props.currentActivity ? <div className='weather'>Weather loading...</div> :
      <div className='weather'>
        <h3>Weather</h3>
        <p>{this.state.weather} and {this.state.temperature}°F</p>
      </div>
    );
  }
}