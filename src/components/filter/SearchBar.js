import React from 'react'

const SearchBar = ({dispatch,data,setCurrentPage}) => {
  return (
    <div className="wrap">
      <div className="search">
        <input type="text"
        onChange={(e)=>{
          dispatch({
            type: 'SEARCH_QUERY',
            payload: {
              data,
              value: e.target.value
            }
          })
          setCurrentPage(1)
        }}
          className="searchTerm"
           placeholder="Search by Firstname , lastname or Username" />
      </div>
    </div>
  )
}

export default SearchBar
