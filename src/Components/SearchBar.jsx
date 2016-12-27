const SearchBar = ({updateSearchTerms, searchType}) => ( 
  <div>
    <input type="text" onChange={(e) => updateSearchTerms(searchType, e.target.value)} className="form-control search-bar" placeholder={`${searchType} search`}/>
  </div>
);