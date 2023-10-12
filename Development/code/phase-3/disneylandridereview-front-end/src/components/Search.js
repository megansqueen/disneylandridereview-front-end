import React from "react";


function Search({ searchTerm, handleSearch }) {

return (

    <div className="searchbar">
        <label htmlFor="search">Search Rides</label>
            <input
                type="search"
                id="search"
                placeholder="Search Rides"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
        />
    </div>

)
}

export default Search
