const SearchBar = ({searchType}) => ( 
  <div>
    <input type="text" className="form-control search-bar" placeholder={`${searchType} search`}/>
  </div>
);