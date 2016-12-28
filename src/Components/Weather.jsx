class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lon: null
    }
  }
  componentDidMount() {
    this.fetch(this.setData.bind(this));
  }
  render() {
    return (
      <div className='weather'>
        <h3>Weather</h3>
      </div>
    );
  } 

  // $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&units=imperial&appid=6aacd398ae4803d7a0bf312facdbfaef', function(json){
  // });