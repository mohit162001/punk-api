import React, { useState, useEffect } from 'react';
import './App.css';
import BeersList from './components/BeersList/BeersList';
import SearchBox from './components/SearchBox/SearchBox';

function App() {

    const [beersArray, setBeersArray] = useState([])
    let [phBeers, setPhBeers] = useState([])
    let [abvBeers, setAbvBeers] = useState([])
    let [searchTerm, setSearchTerm] = useState('')

    phBeers = beersArray.filter(beer => {
        return beer.ph < 4;
    })

    abvBeers = beersArray.filter(beer => {
        return beer.abv > 13;
    })

    searchTerm = beersArray.filter(beer => {
        if(searchTerm == "") {
            return beersArray;
        } else if(beer.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return beersArray;
        }
    })

    const filterByPH =() => {
        setBeersArray(phBeers)
    }
    
    const filterByABV = () => {
        setBeersArray(abvBeers)
    }

    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
        setBeersArray(searchTerm) 
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
        <SearchBox handleSearch={handleSearch}/>
        <button onClick={filterByABV}>ABV</button>
        <button onClick={filterByPH}>PH</button>
        <BeersList beersArray={beersArray}/>
    </div>
  );
}

export default App;
