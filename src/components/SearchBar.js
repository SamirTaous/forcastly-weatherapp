
const SearchBar = () => {
  return (
        <form className="search-bar">
            <input className="form-control" type="text" placeholder="Enter city name"></input>
            <button className="send-button" type="submit">Search</button>
        </form>
  )
}

export default SearchBar