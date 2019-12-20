import React, { useEffect, useState } from "react";

import CharacterCard from './CharacterCard';
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rick-api.herokuapp.com/api/')
    .then(response => {
      setData(response.data.results);
      console.log(response.data.results);
    })
    .catch(error =>{
      console.log("Error Processing Data", error);
    })
  }, [setData]);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!<CharacterCard/></h2>
    </section>
  );
}
