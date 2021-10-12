import React from 'react'

const SearchBox = (props) => {

    const {searchTerm, handleSearch} = props

    return (
        <div>
            <input type="text" value={searchTerm} onInput={handleSearch}/>
        </div>
    )
}

export default SearchBox
