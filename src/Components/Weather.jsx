class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
      temperature: null
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentActivity !== null) {
      $.getJSON(`http://api.openweathermap.org/data/2.5/weather?lat=${nextProps.currentActivity.lat}&lon=${nextProps.currentActivity.lon}&units=imperial&appid=6aacd398ae4803d7a0bf312facdbfaef`, (json) => {
        console.log(json);
        // this.setState({
        //   lat: jason
        // });
      });
    }
  }
  render() {
    return (
      <div className='weather'>
        <h3>Weather</h3>
      </div>
    );
  }
}