import React, { useEffect, useState } from "react";

import CharacterCard from './CharacterCard';
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  const [searchResults, setSearchResults] = useState("");
  useEffect(() => {

    axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      const output = response.data.results.filter(person =>
        person.name.toLowerCase().includes(searchResults.toLowerCase())
      );
      console.log(response.data.results);
      setData(output);

    })
    .catch(error => {
      console.error('Server Error', error);
    });
}, [searchResults]); 

  return (
    <section className="character-list">
    <div className="character-list">
    <form>
    <label htmlFor="name">Character: </label>
    <input 
    type="text"
    placeholder="search by name"  
    ></input>
    </form>
    </div>
      <h2>TODO: `array.map()` over your state here!<CharacterCard/></h2>
    </section>
  );
}
