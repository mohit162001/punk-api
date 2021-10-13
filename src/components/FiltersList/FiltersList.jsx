import React from 'react'
import './FiltersList.scss'

const FiltersList = (props) => {

    const  {filterByABV, filterByPH} = props

    return (
        <div className="filters__section">
            <p>Filter Beers by:</p>
            <div className="filtersList">
                <div className="filtersList__filter">
                    <input onClick={filterByABV} type="checkbox" id="abv" name="abv" />
                    <label for="abv">High Alcohol (ABV &lsaquo; 6.0%)</label>
                </div>
                <div className="filtersList__filter">
                    <input onClick={filterByPH} type="checkbox" id="ph" name="ph" />
                    <label for="ph">High Acidity (pH &rsaquo; 4.0%)</label>
                </div>
            </div>
        </div>
    )
}

export default FiltersList
