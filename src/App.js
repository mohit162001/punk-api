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

    const handleInput = event => {
        const inputValue = event.target.value.toLowerCase();
        setSearchTerm(inputValue)
    }

    const searchResults = beersArray.filter(result => {
        return result.name.toLowerCase().includes(searchTerm)
    })

  return (
    <div className="App">
        <Nav />
        <Header />
        <SearchBox handleInput={handleInput} searchTerm={searchTerm}/>
        <BeersList beersArray={searchResults}/>
    </div>
  );
}

export default App;
