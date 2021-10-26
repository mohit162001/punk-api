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
                    <label htmlFor="abv">High Alcohol (ABV &rsaquo; 6.0%)</label>
                </div>
                <div className="filtersList__filter">
                    <input onClick={filterByPH} type="checkbox" id="ph" name="ph" />
                    <label htmlFor="ph">High Acidity (pH &lsaquo; 4.0%)</label>
                </div>
            </div>
        </div>
    )
}

export default FiltersList
