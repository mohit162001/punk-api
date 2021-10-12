import React, { useState, useEffect } from 'react';
import './App.css';
import BeersList from './components/BeersList/BeersList';

function App() {

    const [beersArray, setBeersArray] = useState([])
    let [phBeers, setPhBeers] = useState([])
    let [abvBeers, setAbvBeers] = useState([])

    phBeers = beersArray.filter(beer => {
        return beer.ph < 4;
    })

    abvBeers = beersArray.filter(beer => {
        return beer.abv > 13;
    })

    const filterByPH =() => {
        setBeersArray(phBeers)
    }
    
    const filterByABV = () => {
        setBeersArray(abvBeers)
    }

    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers?per_page=80')
        .then(response => {return response.json()})
        .then(punkObj => {
            const beersObj = punkObj
            setBeersArray(beersObj)
        })
    }, [])

    console.log(beersArray)

  return (
    <div className="App">
        <button onClick={filterByABV}>ABV</button>
        <button onClick={filterByPH}>PH</button>
        <BeersList beersArray={beersArray}/>
    </div>
  );
}

export default App;
