import React, { useEffect, useState } from "react";

import Alert from './Alert'
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types'
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  const [searchResults, setSearchResults] = useState("");
  const [text, setText] = useState('');
  const [alert, setAlert] = useState(null);
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

const onSubmit = e => {
  e.preventDefault()
  if (text === '') {
    setAlert('Please enter something', 'light')
  } else {
    searchResults(text)
    setText('');
  }
}
const showAlert = (msg, type) => {
  setAlert({ msg, type });
  setTimeout(() => setAlert(null), 5000)
};


  return (
    <section className="character-list">
    <div className="character-list">
    <Alert alert={alert} />
    <form onSubmit={onSubmit}>
    <label htmlFor="name">Search: </label>
    <input
    type="text"
    onChange={handleChange}
    value={searchResults}
    
    autoComplete="off"
    setAlert={showAlert}
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
CharacterList.prototype = {
  setAlert: PropTypes.func.isRequired
}