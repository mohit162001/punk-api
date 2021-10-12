import React from 'react'

const BeersCard = (props) => {

    const { id, name, tagline, ph, abv, firstBrewed} = props

    return (
        <div className="beers__card">
            <h3>{name}</h3>
            <h4>Brewed in: {firstBrewed}</h4>
            <p>{tagline}</p>
            <h5>Ph: {ph}</h5>
            <h5>Abv: {abv}</h5>
        </div>
    )
}

export default BeersCard
