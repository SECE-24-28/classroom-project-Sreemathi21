import React, { useContext } from 'react'
import DataContext from './context/DataContext'


const Search = () => {

  const { search, setSearch } = useContext(DataContext)

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default Search
