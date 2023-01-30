import React from "react";
import './searchItem.css'

const SearchItem = ({search, setSearch}) => {
    return(
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <label  htmlFor="search">Search</label>
            <input 
                role="searchbox"
                type="text"
                id="search"
                placeholder="Search Items"
                value={search}
                onChange={ (e) => setSearch(e.target.value)}
                />
        </form>
    )
}

export default SearchItem