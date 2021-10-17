import React from 'react'
import './SearchBox.scss'

const SearchBox = (props) => {

    const {searchTerm, handleInput} = props

    return (
        <div className="searchBox">
            <input type="text" value={searchTerm} onInput={handleInput} placeholder="Start your search..."/>
        </div>
    )
}

export default SearchBox
