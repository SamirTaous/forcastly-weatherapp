import { useState } from "react";

const SearchBar = ({onSet}) => {
    const [text,setText]= useState('');
    const onSubmit=(e)=>{
        e.preventDefault();
        onSet(text);
        setText('');
    }
  return (
        <form className="search-bar" onSubmit={onSubmit}>
            <input className="form-control" type="text" placeholder="Enter city name" onChange={(e)=>setText(e.target.value)}></input>
            <button className="send-button" type="submit">Search</button>
        </form>
  )
}

export default SearchBar