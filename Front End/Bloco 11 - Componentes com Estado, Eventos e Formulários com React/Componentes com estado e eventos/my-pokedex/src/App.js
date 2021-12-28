import './App.css';
import React from 'react';
import pokemons from './data.js'

function Pokedex(props) {
  // Altere a sua página para que, ao invés de exibir toda a lista de pokémons, ela exiba um pokémon por vez. Ao apertar um botão de Próximo pokémon, a página passa a exibir o próximo pokémon da lista, e depois o próximo, e assim sucessivamente. Ao se chegar ao último pokémon da lista, a pokedex deve voltar para o primeiro pokémon no apertar do botão.

  const [pokemon, setPokemon] = React.useState(pokemons[0]);
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name} />
      <p>{pokemon.type}</p>
      <button onClick={() => setPokemon(pokemons[(pokemons.indexOf(pokemon) + 1) % pokemons.length])}>Next</button>
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
