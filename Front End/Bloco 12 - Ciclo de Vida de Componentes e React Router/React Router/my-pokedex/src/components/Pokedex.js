import React from "react";
import Header from "./Header";
import Pokemon from "./Pokemon";
import pokedexLoadingGIF from "./../pokedexLoading.gif";
import { Link } from "react-router-dom";

let lastChanged = "id";
if (localStorage.getItem("favorites") === null) localStorage.setItem("favorites", JSON.stringify(new Array(899).fill(false)));

export default function Pokedex({location: { id = 1 }}) {
  const fetchPokemon = (id, name) => {
    if (pokemonSearch !== name) setPokemonSearch(name);
    if (pokemonID !== id) setPokemonID(id);
    if (lastChanged === "id") {
      if (!id) return;
      if (id < 1 || id > 898)
        return id < 1 ? setPokemonID(1) : setPokemonID(898);
      setLoading(true);
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json())
        .then((pokemon) => {
          setPokemon(pokemon);
          setPokemonSearch(pokemon.name);
          JSON.parse(localStorage.getItem("favorites"))[pokemon.id] ? setFavorite(true) : setFavorite(false);
          setLoading(false);
        });
    }
    if (lastChanged === "nameSearch") {
      console.log("nameSearch");
      if (!name) return;
      setLoading(true);
      fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
        .then((response) => response.json())
        .then((pokemon) => {
          setPokemon(pokemon);
          setPokemonID(pokemon.id);
          JSON.parse(localStorage.getItem("favorites"))[pokemon.id] ? setFavorite(true) : setFavorite(false);
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

  const [favorite, setFavorite] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [pokemon, setPokemon] = React.useState(null);
  const [pokemonID, setPokemonID] = React.useState(id);
  const [pokemonSearch, setPokemonSearch] = React.useState("");

  React.useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((pokemon) => {
        setPokemon(pokemon);
        JSON.parse(localStorage.getItem("favorites"))[pokemon.id] ? setFavorite(true) : setFavorite(false);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="flex flex-col items-center text-center bg-slate-50 min-h-screen">
      <Header />
      <Link to={`/pokemon/${pokemonID}`}>Details</Link>
      <Link to={`/about`}>About page</Link>
      <Link to={`/favorites`}>Favorites</Link>
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
              className="ml-2 w-9"
              type="number"
              value={pokemonID}
              onChange={({ target: { value } }) => {
                lastChanged = "id";
                if (value < 1000) setPokemonID(Number(value));
              }}
            />
          </label>
          <input
            className="ml-2 w-24 text-center capitalize"
            placeholder="Search"
            value={pokemonSearch}
            onChange={({ target: { value } }) => {
              lastChanged = "nameSearch";
              setPokemonSearch(value);
            }}
          />
        </div>
        <button
          className="bg-white py-1 px-2 rounded shadow-md mt-8 transition hover:bg-slate-50"
          type="submit"
        >
          Search
        </button>
      </form>
      <div className="relative">
        <button
          className="absolute top-1/2 -left-8 -translate-y-1/2 -translate-x-full bg-white py-1 px-2 rounded shadow-md hover:bg-slate-50"
          onClick={() => {
            lastChanged = "id";
            if (pokemonID > 1) fetchPokemon(pokemonID - 1, pokemonSearch);
          }}
        >
          Previous
        </button>
        {loading ? (
          <div className="shadow-xl rounded-xl h-36 aspect-[2/1] bg-white flex items-center justify-center my-8 overflow-hidden">
            <img src={pokedexLoadingGIF} className="h-36 opacity-10" alt="Loading..." />
          </div>
        ) : (
          <Pokemon pokemon={pokemon} />
        )}
        <button
          className="absolute top-1/2 -right-8 -translate-y-1/2 translate-x-full bg-white py-1 px-2 rounded shadow-md transition hover:bg-slate-50"
          onClick={() => {
            lastChanged = "id";
            if (pokemonID < 898) fetchPokemon(pokemonID + 1, pokemonSearch);
          }}
        >
          Next
        </button>
        <button onClick={() => {
          if (favorite) {
            const favorites = JSON.parse(localStorage.getItem("favorites"));
            favorites[pokemon.id] = false;
            localStorage.setItem("favorites", JSON.stringify(favorites));
          }
          if (!favorite) {
            const favorites = JSON.parse(localStorage.getItem("favorites"));
            favorites[pokemon.id] = true;
            localStorage.setItem("favorites", JSON.stringify(favorites));
          }
          setFavorite(!favorite)}}>{favorite ? "Favorited" : "Set as favorite"}</button>
      </div>
    </div>
  );
}
