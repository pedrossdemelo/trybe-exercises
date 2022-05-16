import './App.css';
import React from 'react';
import pokemons from './data.js'

function Pokedex(props) {
  const [pokemonsList, setPokemonsList] = React.useState(pokemons);
  const [pokemon, setPokemon] = React.useState(pokemons[0]);
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.image} alt={pokemon.name} />
      {/* Add more info */}
      <p>Average weight: {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</p>
      <p>{pokemon.type}</p>
      <a href={pokemon.moreInfo}>More info</a>
      <button onClick={() => setPokemon(pokemonsList[(pokemonsList.indexOf(pokemon) + 1) % pokemonsList.length])}>Next</button>
      <button onClick={() => {
        setPokemonsList(pokemons.filter(pokemon => pokemon.type === 'Fire'));
        setPokemon(pokemons.find(pokemon => pokemon.type === 'Fire'));
      }}>Fire</button>
      <button onClick={() => {
        setPokemonsList(pokemons.filter(pokemon => pokemon.type === 'Psychic'));
        setPokemon(pokemons.find(pokemon => pokemon.type === 'Psychic'));
      }}>Psychic</button>
      <button onClick={() => {
        setPokemonsList(pokemons);
        setPokemon(pokemons[0]);
      }}>Reset</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Pokedex />
    </div>
  );
}

export default App;
