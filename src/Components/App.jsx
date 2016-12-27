class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentActivity: null,
      data: null                // this is where we store the result of our ajax call
    }
  }

  fetch(criteria, callback) {
    getData(criteria, callback);
  }

  setData(data) {
    this.setState({
      data: data.places,
      currentActivity: data.places[0],
    });
  }

  componentDidMount() {
    this.fetch({}, this.setData.bind(this));
  }

  render() {
    return (
      <div>
        <Search />
        <MainView currentActivity={this.state.currentActivity}/>
        <ActivityList areas={this.state.data}/>
      </div>
    );
  }
}
