class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentActivity: null,
      data: null
    }
  }

  fetch(callback, criteria) {
    getData(callback, criteria);
  }

  setData(data) {
    this.setState({
      data: data.places,
      currentActivity: data.places[0],
    });
  }

  handleActivityClick(area) {
    this.setState({currentActivity: area});
  }

  componentDidMount() {
    this.fetch(this.setData.bind(this));
  }

  render() {
    return (
      <div>
        <Search setData={this.setData.bind(this)} fetch={this.fetch.bind(this)}/>
        <MainView currentActivity={this.state.currentActivity}/>
        <ActivityList handleActivityClick={this.handleActivityClick.bind(this)} areas={this.state.data}/>
      </div>
    );
  }
}
