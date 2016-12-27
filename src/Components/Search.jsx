class Search extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-xs-6">
          <div className="input-group">
            <SearchBar />
          </div>
        </div>
        <div className="col-md-6 col-xs-6">
          <div className="input-group">
            <SearchBar />
          </div>
        </div>
      </div>
    );
  }
}