import React from 'react'
import BeersCard from '../BeersCard/BeersCard'
import './BeersList.scss'

const BeersList = (props) => {

    const {beersArray} = props

    const beersArrayJSX = beersArray.map(beer => {
        return <BeersCard key={beer.id} name={beer.name} firstBrewed={beer.first_brewed} tagline={beer.tagline} ph={beer.ph} abv={beer.abv} />
    })

    return (
        <div>
            {beersArrayJSX}
        </div>
    )
}

export default BeersList
