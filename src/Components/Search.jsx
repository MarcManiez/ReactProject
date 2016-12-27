class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      activity: null
    };
  }
  updateSearchTerms(searchType, value) {
    this.setState(function() {
      const obj = {};
      obj[searchType] = value;
      return obj;
    });
  }
  onKeyPress(event) {
    if (event.which === 13 && this.state.location !== null && this.state.activity !== null) {
      this.props.fetch(this.props.setData, {location: this.state.location, activity: this.state.activity});
      this.refs.search.reset();
      debugger;
      $('.search-bar').first().focus();
      this.setState({location: null, activity: null});
    }
  }
  render() {
    return (
      <form onKeyPress={this.onKeyPress.bind(this)} className="row" ref="search">
        <div className="col-md-6 col-xs-6">
          <div className="input-group">
            <SearchBar updateSearchTerms={this.updateSearchTerms.bind(this)} searchType={'location'}/>
          </div>
        </div>
        <div className="col-md-6 col-xs-6">
          <div className="input-group">
            <SearchBar updateSearchTerms={this.updateSearchTerms.bind(this)} searchType={'activity'}/>
          </div>
        </div>
      </form>
    );
  }
}