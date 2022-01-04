import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import pokedexLoadingGIF from "./../pokedexLoading.gif";
import Header from "./Header";

export default function PokemonDetails(props) {
  let { pokemon } = props.match.params;
  const [loading, setLoading] = React.useState(true);
  const [pokemonData, setPokemonData] = React.useState(null);
  const [error, setError] = React.useState(false);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
        setLoading(false);
      })
      .catch(() => {
        console.error("Pokemon not found");
        setError(true);
        setLoading(false);
      });
  }, [pokemon]);
  return (
    <div className="flex flex-col items-center text-center bg-slate-50 min-h-screen">
      <Header />
      {loading ? (
        <img src={pokedexLoadingGIF} alt="Loading..." className="opacity-10" />
      ) : (
        <>
          {error ? (
            <>
              <Link to="/">Pokedex</Link>
              <p>Pokemon not found</p>
            </>
          ) : (
            <>
              <Link to={{ pathname: "/", id: pokemonData.id }}>Pokedex</Link>
              <div className="">{JSON.stringify(pokemonData)}</div>
            </>
          )}
        </>
      )}
    </div>
  );
}
