import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

import CharacterList from "./components/CharacterList"
import Header from "./components/Header.js";
import React from "react";
import WelcomePage from "./components/WelcomePage";

export default function App() {
  return (
    <main>
      <Header />
      <div className="nav-links">
      <Link className="some-link" to="/">Home</Link><br></br>
          <Link className="some-link" to="/CharacterList">CharacterList of Rick and Morty</Link>
      </div>
      <Route exact path="/" component={WelcomePage}/>
      <Route exact path="/CharacterList" component={CharacterList} />
    </main>
  );
}