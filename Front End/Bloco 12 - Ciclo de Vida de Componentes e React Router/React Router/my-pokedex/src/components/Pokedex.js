import React from "react";
import Pokemon from "./Pokemon";

export default function Pokedex(props) {
  const fetchPokemon = (id, name) => {
    if (pokemonSearch !== name) setPokemonSearch(name);
    if (pokemonID !== id) setPokemonID(id);
    if (lastChanged === "id") {
      if (id === "") return;
      if (id < 1 || id > 898)
        return id < 1 ? setPokemonID(1) : setPokemonID(898);
      setLoading(true);
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json())
        .then((pokemon) => {
          setPokemon(pokemon);
          setPokemonSearch(pokemon.name);
          setLoading(false);
        });
    }
    if (lastChanged === "nameSearch") {
      if (name === "") return;
      setLoading(true);
      fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
        .then((response) => response.json())
        .then((pokemon) => {
          setPokemon(pokemon);
          setPokemonID(pokemon.id);
          setLoading(false);
        })
        .catch(() => {
          console.error("Pokemon not found");
          setPokemonID(pokemon.id);
          setPokemonSearch(pokemon.name);
          setLoading(false);
        });
    }
  };

  const [lastChanged, setLastChanged] = React.useState("id");
  const [loading, setLoading] = React.useState(true);
  const [pokemon, setPokemon] = React.useState(null);
  const [pokemonID, setPokemonID] = React.useState(1);
  const [pokemonSearch, setPokemonSearch] = React.useState("Bulbasaur");

  React.useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/1`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col items-center text-center bg-slate-50 min-h-screen">
      <form
        className="flex flex-col items-center justify-center w-full max-w-sm mt-8"
        onSubmit={(e) => {
          e.preventDefault();
          fetchPokemon(pokemonID, pokemonSearch);
        }}
      >
        <div className="rounded-lg px-3 py-2 bg-white shadow-md">
          <label>
            #
            <input
              className="ml-2 w-10"
              type="number"
              value={pokemonID}
              onChange={({ target: { value } }) => {
                setLastChanged("id");
                if (value < 1000) setPokemonID(value);
              }}
            />
          </label>
          <input
            className="mr-2 w-24 text-center capitalize"
            value={pokemonSearch}
            onChange={({ target: { value } }) => {
              setLastChanged("nameSearch");
              setPokemonSearch(value);
            }}
          />
        </div>
        <button
          className="bg-white py-1 px-2 rounded shadow-md mt-8"
          type="submit"
        >
          Search
        </button>
      </form>
      <div className="relative">
        <button
          className="absolute top-1/2 -left-8 -translate-y-1/2 -translate-x-full bg-white py-1 px-2 rounded shadow-md hover:bg-slate-50"
          onClick={() => {
            setLastChanged("id");
            fetchPokemon(pokemonID + 1, pokemonSearch);
          }}
        >
          Previous
        </button>
        {loading ? (
          <div className="shadow-xl rounded-xl h-36 aspect-[2/1] bg-white flex items-center justify-center my-8">
            {" "}
            Loading...{" "}
          </div>
        ) : (
          <Pokemon pokemon={pokemon} />
        )}
        <button
          className="absolute top-1/2 -right-8 -translate-y-1/2 translate-x-full bg-white py-1 px-2 rounded shadow-md transition hover:bg-slate-50"
          onClick={() => {
            setLastChanged("id");
            fetchPokemon(pokemonID + 1, pokemonSearch);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
