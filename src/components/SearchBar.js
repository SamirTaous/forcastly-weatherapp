
const SearchBar = ({onSubmit}) => {
  return (
        <form className="search-bar">
            <input className="form-control" type="text" placeholder="Enter city name" onSubmit={(e)=>{
                e.preventDefault();
                
            }}></input>
            <button className="send-button" type="submit">Search</button>
        </form>
  )
}

export default SearchBar