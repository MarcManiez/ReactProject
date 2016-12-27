class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      activity: null
    }
  }
  updateSearchTerms(searchType, value) {
    this.setState(function() {
      const obj = {};
      obj[searchType] = value;
      return obj;
    });
  }
  Search() {
    this.props.fetch()
  }
  onKeyPress(event) {
    if (event.which === 13) {
      this.props.fetch(this.props.setData, {location: this.state.location, activity: this.state.activity});
    }
  }
  render() {
    return (
      <form onKeyPress={this.onKeyPress.bind(this)} className="row">
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