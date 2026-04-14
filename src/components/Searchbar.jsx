import React from 'react'
import "./Searchbar.css"

const Searchbar = ({ search, onSearch,  loading }) => {
  return (
    <div className='search-area'>
      <h1 className='search-heading'> Discover Stories That Stay With You</h1>
      <h2 className='search-sub-heading'>Type a title, discover details, and explore more.</h2>
      
      <div className='search-container'>
        {loading ? (
    <span className="loader"></span>
  ) : (
    <span className="material-icons search-icon">search</span>
  )}
        {/* <FontAwesomeIcon icon={byPrefixAndName.fas['magnifying-glass']} /> */}
        <input
          type="text"
          placeholder="Search by title, author, or language"
          value={search}
          onChange={(e) => {
            onSearch(e.target.value);
            // handleSearch(e);
          }}
          className='search-bar'
        />
      </div>
      {/* <button onClick={handleSearch} className='search-button'>Search</button> */}
    </div>
  )
}

export default Searchbar
