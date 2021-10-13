import React from 'react'
import './SearchBox.scss'

const SearchBox = (props) => {

    const {searchTerm, handleSearch} = props

    return (
        <div className="searchBox">
            <input type="text" value={searchTerm} onInput={handleSearch} placeholder="Start your search..."/>
        </div>
    )
}

export default SearchBox
