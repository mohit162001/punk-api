import React, { useState, useEffect } from "react";
import "./App.css";
import BeersList from "./components/BeersList/BeersList";
import FiltersList from "./components/FiltersList/FiltersList";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const [beersArray, setBeersArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers?per_page=80")
      .then(response => {
        return response.json();
      })
      .then(jsonObject => {
        const beersObj = jsonObject;
        setBeersArray(beersObj);
      });
  }, []);

  const [ph, setPh] = useState(false);
  const [abv, setAbv] = useState(false);

  const filterByPH = () => {
    setPh(!ph);
  };

  const filterByABV = () => {
    setAbv(!abv);
  };

  const handleInput = event => {
    const inputValue = event.target.value.toLowerCase();
    setSearchTerm(inputValue);
  };

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
    <div className="App">
      <Nav />
      <Header />
      <SearchBox handleInput={handleInput} searchTerm={searchTerm} />
      <FiltersList filterByABV={filterByABV} filterByPH={filterByPH} />
      <BeersList beersArray={filterResults} />
    </div>
  );
}

export default App;
