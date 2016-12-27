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
  render() {
    return (
      <form onKeyPress={(e) => {if (event.keyCode == 13) {e.preventDefault(); e.target.submit()}}} className="row">
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