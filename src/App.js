import React, { useState, useEffect } from 'react';
import './App.css';
import BeersList from './components/BeersList/BeersList';
import FiltersList from './components/FiltersList/FiltersList';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import SearchBox from './components/SearchBox/SearchBox';

function App() {

    const [beersArray, setBeersArray] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    
    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers?per_page=80')
        .then(response => {return response.json()})
        .then(jsonObject => {
            const beersObj = jsonObject;
            setBeersArray(beersObj)
        })
    }, [])

    const [ph, setPh] = useState(false)
    const [abv, setAbv] = useState(false)

    const filterByPH = () => {
        setPh(!ph)
        beersArray.filter(beer => {
            return beer.ph < 4;
        })
    }

    const filterByABV = () => {
        setAbv(!abv)
        beersArray.filter(beer => {
            return beer.abv > 6;
        })
    }

    const handleInput = event => {
        const inputValue = event.target.value.toLowerCase();
        setSearchTerm(inputValue)

        if(searchTerm === "") {
            return beersArray;
        } else if (searchTerm !== "") {
            const searchResults = beersArray.filter(result => {
                return result.name.toLowerCase().includes(searchTerm)
            })
            setBeersArray(searchResults)
         }
    }

  return (
    <div className="App">
        <Nav />
        <Header />
        <SearchBox handleInput={handleInput} searchTerm={searchTerm}/>
        <FiltersList filterByABV={filterByABV} filterByPH={filterByPH} />
        <BeersList beersArray={beersArray} />
        
    </div>
  );
}

export default App;
