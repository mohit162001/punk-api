import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import './BeerInfo.scss'

const BeerInfo = (props) => {

    const {id} = useParams()

    const {beersArray} = props;

    const beersArr = beersArray.filter(beer => {
        return beer.id == id;
    })

    const singleBeer = beersArr[0]
    
    return (
        <div className="beer-page">
            <Link to="/" className="back-home">&#8592; Back to HomePage</Link>

            <div className="beer-info">
                <img src={singleBeer.image_url} className="beer-info__img" alt="" />

                <div className="beer-info__column">
                    <h2 className="beer-info__title">{singleBeer.name}</h2>
                    <p><b>Brewed in:</b> {singleBeer.first_brewed}</p>
                    <p><b>Yeast:</b> {singleBeer.ingredients.yeast}</p>
                    <p className="beer-info__description"><em>{singleBeer.description}</em></p>

                    <table className="beer-info__table" border="1" cellpadding="10">
                        <tbody>
                            <tr>
                                <td><b>PH</b></td>
                                <td><b>ABV</b></td>
                                <td><b>IBU</b></td>
                                <td><b>EBC</b></td>
                                <td><b>SRM</b></td>
                            </tr>
                            <tr>
                                <td>{singleBeer.ph}</td>
                                <td>{singleBeer.abv}</td>
                                <td>{singleBeer.ibu}</td>
                                <td>{singleBeer.ebc}</td>
                                <td>{singleBeer.srm}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p><b>Food Pairing:</b> {singleBeer.food_pairing}</p>
                    <p><b>Tips:</b> {singleBeer.brewers_tips}</p>
                </div>
            </div>
        </div>
    )
}

export default BeerInfo
