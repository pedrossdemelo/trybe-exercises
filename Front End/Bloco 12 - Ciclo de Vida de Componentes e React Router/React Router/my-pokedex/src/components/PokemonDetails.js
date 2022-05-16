import { Heart } from "iconsax-react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import pokedexLoadingGIF from "./../pokedexLoading.gif";
import Header from "./Header";
import Pokemon from "./Pokemon";

function colorFromPercentage(stat) {
  let percentage = stat / 2.55;
  if (percentage > 80) return "bg-cyan-300";
  if (percentage > 66) return "bg-teal-300";
  if (percentage > 52) return "bg-green-300";
  if (percentage > 38) return "bg-yellow-300";
  if (percentage > 24) return "bg-orange-300";
  return "bg-red-300";
}

export default function PokemonDetails(props) {
  let { pokemon } = props.match.params;
  const [favorite, setFavorite] = React.useState(
    JSON.parse(localStorage.getItem("favorites"))[pokemon]
  );
  const [loading, setLoading] = React.useState(true);
  const [pokemonData, setPokemonData] = React.useState(null);
  const [error, setError] = React.useState(false);
  if (pokemonData) {
    var [HP, Attack, Defense, SpAtk, SpDef, Speed] = pokemonData.stats;
    [HP, Attack, Defense, SpAtk, SpDef, Speed] = [HP.base_stat, Attack.base_stat, Defense.base_stat, SpAtk.base_stat, SpDef.base_stat, Speed.base_stat];
  }
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
              <Link
                className="inline-block mt-8 bg-white py-1 px-2 rounded shadow-md transition hover:bg-slate-50"
                to={{ pathname: "/", id: pokemonData.id }}
              >
                Go to Pokedex
              </Link>
              <div className="relative">
                <Pokemon pokemon={pokemonData} />
                <button
                  className="absolute top-8 left-0 bg-white bg-opacity-70 px-2 pt-2.5 pb-1.5 rounded-full backdrop-filter backdrop-blur-[3px] backdrop-saturate-200 border border-white border-opacity-60"
                  onClick={() => {
                    if (favorite) {
                      const favorites = JSON.parse(
                        localStorage.getItem("favorites")
                      );
                      favorites[pokemon] = false;
                      localStorage.setItem(
                        "favorites",
                        JSON.stringify(favorites)
                      );
                    }
                    if (!favorite) {
                      const favorites = JSON.parse(
                        localStorage.getItem("favorites")
                      );
                      favorites[pokemon] = true;
                      localStorage.setItem(
                        "favorites",
                        JSON.stringify(favorites)
                      );
                    }
                    setFavorite(!favorite);
                  }}
                >
                  {favorite ? (
                    <Heart size="28" color="black" variant="Bold" />
                  ) : (
                    <Heart size="28" color="black" variant="Linear" />
                  )}
                </button>
              </div>
              <div className="shadow-xl rounded-xl h-40 aspect-[2/1] bg-white flex mb-8 overflow-hidden p-2">
                <article className="text-right">
                  HP: {HP} <br />
                  Attack: {Attack} <br />
                  Defense: {Defense} <br />
                  Sp. Atk: {SpAtk} <br />
                  Sp. Def: {SpDef} <br />
                  Speed: {Speed}
                </article>
                <aside
                  id="grid"
                  className="grid grid-rows-6 gap-1.5 pl-1.5 py-0.5 grid-cols-1 grow"
                >
                  <div className={`rounded ${colorFromPercentage(HP)}`} style={{ width: HP/2.55 + '%' }} />
                  <div className={`rounded ${colorFromPercentage(Attack)}`} style={{ width: Attack/2.55 + '%' }} />
                  <div className={`rounded ${colorFromPercentage(Defense)}`} style={{ width: Defense/2.55 + '%' }} />
                  <div className={`rounded ${colorFromPercentage(SpAtk)}`} style={{ width: SpAtk/2.55 + '%' }} />
                  <div className={`rounded ${colorFromPercentage(SpDef)}`} style={{ width: SpDef/2.55 + '%' }} />
                  <div className={`rounded ${colorFromPercentage(Speed)}`} style={{ width: Speed/2.55 + '%' }} />
                </aside>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
