import React from 'react'
import { Link } from 'react-router-dom'
import BeersCard from '../BeersCard/BeersCard'
import './BeersList.scss'

const BeersList = (props) => {

    const {beersArray} = props

    const beersArrayJSX = beersArray.map(beer => {
        return (
            <Link to={`/beerinfo/${beer.id}`} key={beer.id}>
                <BeersCard key={beer.id} img={beer.image_url} name={beer.name} firstBrewed={beer.first_brewed} tagline={beer.tagline} ph={beer.ph} abv={beer.abv} />
            </Link>
        ) 
    })

    return (
        <main className="main">
            {beersArrayJSX}
        </main>
    )
}

export default BeersList
