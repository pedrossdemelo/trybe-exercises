import './App.css';
import React from 'react';
import pokemons from './data.js'

function App() {
  return (
    <div className="App">
      {pokemons.map(pokemon => (
        <div key={pokemon.id}>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.image} alt={pokemon.name} />
          <p>{pokemon.type}</p>
          <p>{pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</p>
          <a href={pokemon.moreInfo}>More Info</a>
        </div>
      ))}
    </div>
  );
}

export default App;
