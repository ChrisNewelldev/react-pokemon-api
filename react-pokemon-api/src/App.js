import './App.css';
import Home from './Home.js';
import React, {useState, useEffect} from 'react';

function App() {
  const [pokemon, setPokemon] = useState([])
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/')
      .then(response => response.json())
      .then(json => setPokemon(json))
  }, [])
    return (
      <div className="App">
        <Home myStr={'Hello world!'}/>
      </div>
    );
}

export default App;

