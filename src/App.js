import React, { useState, useEffect } from 'react';
import './App.css';
import BeersList from './components/BeersList/BeersList';
import FiltersList from './components/FiltersList/FiltersList';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
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
        return beer.abv > 6;
    })

    searchTerm = beersArray.filter(beer => {
        if(beer.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return beersArray;
        } else if(searchTerm === "") {
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
        const input = event.target.value.toLowerCase();
        setSearchTerm(input);
    }

    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers?per_page=80')
        .then(response => {return response.json()})
        .then(punkObj => {
            const beersObj = punkObj
            setBeersArray(beersObj)
        })
    }, [searchTerm])

  return (
    <div className="App">
        <Nav />
        <Header />
        <SearchBox handleSearch={handleSearch}/>
        <FiltersList filterByABV={filterByABV} filterByPH={filterByPH} />
        <BeersList beersArray={beersArray}/>
    </div>
  );
}

export default App;
