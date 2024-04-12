import React from 'react'
import { CiSearch } from "react-icons/ci";


const Search = ({ handleSearch }) => {
  return (
    <div className="searchBlock">
        <span><input type="text" placeholder='Search user with firstname' 
         onInput={(e)=>handleSearch(e.target.value)}/></span>
        <span className="searchIcon"><CiSearch /></span>
    </div>
  )
}

export default Search