import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import BeerInfo from './components/BeerInfo/BeerInfo';
import BeersList from './components/BeersList/BeersList';
import FiltersList from './components/FiltersList/FiltersList';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import SearchBox from './components/SearchBox/SearchBox';

function App() {

    const [beersArray, setBeersArray] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [ph, setPh] = useState(false)
    const [abv, setAbv] = useState(false)
    
    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers?per_page=80')
        .then(response => {return response.json()})
        .then(jsonObject => {
            const beersObj = jsonObject;
            setBeersArray(beersObj)
        })
    }, [])

    const filterByPH = () => {
        setPh(!ph)
    }

    const filterByABV = () => {
        setAbv(!abv)
    }

    const handleInput = event => {
        const inputValue = event.target.value.toLowerCase();
        setSearchTerm(inputValue)
    }

    const filterResults = beersArray.filter(result => {
        let beerHasMatched = true;
      
        if (searchTerm) {
          beerHasMatched = result.name.toLowerCase().includes(searchTerm);
        }
      
        if (abv) {
          beerHasMatched = beerHasMatched && result.abv > 6;
        }
      
        if (ph) {
          beerHasMatched = beerHasMatched && result.ph < 4;
        }
      
        return beerHasMatched;
      });

  return (
    <Router>
        <div className="App">
            <Nav />
            <Header />
            <Switch>
                <Route path="/beerinfo/:id">
                    {beersArray.length > 0 && <BeerInfo beersArray={beersArray}/>}
                </Route>
                <Route path="/">
                    <SearchBox handleInput={handleInput} searchTerm={searchTerm}/>
                    <FiltersList filterByABV={filterByABV} filterByPH={filterByPH} />
                    <BeersList beersArray={filterResults} />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
