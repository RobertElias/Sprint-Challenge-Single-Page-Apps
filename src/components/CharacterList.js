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

const handleChange = e => {
  setSearchResults(e.target.value);
};



  return (
    <section className="character-list">
    <div className="character-list">
    <form>
    <label htmlFor="name">Search: </label>
    <input
    type="text"
    onChange={handleChange}
    value={searchResults}
    placeholder="search by name"
    autoComplete="off"
    />
      </form>
 </div>

  <h2>{data.map(results => (
    <CharacterCard key={results.id} data={results} />
  ))}
  </h2>
  </section>
);
}