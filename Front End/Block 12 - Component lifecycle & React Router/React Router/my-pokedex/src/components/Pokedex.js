import React from "react";
import Header from "./Header";
import Pokemon from "./Pokemon";
import pokedexLoadingGIF from "./../pokedexLoading.gif";
import { Link } from "react-router-dom";
import { Heart } from "iconsax-react";
import {
  getNearestSameTypePokemon,
  getNextSameTypePokemon,
  getPreviousSameTypePokemon,
  pokemonIDTypeData,
} from "./../pokemonTypeData.js";

let lastChanged = "id";
if (localStorage.getItem("favorites") === null)
  localStorage.setItem("favorites", JSON.stringify(new Array(899).fill(false)));

export default function Pokedex({ location: { id = 1 } }) {
  const fetchPokemon = (id, name) => {
    if (id === "none") return;
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
          JSON.parse(localStorage.getItem("favorites"))[pokemon.id]
            ? setFavorite(true)
            : setFavorite(false);
          setLoading(false);
        });
    }
    if (lastChanged === "nameSearch") {
      if (!name) return;
      setLoading(true);
      fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
        .then((response) => response.json())
        .then((pokemon) => {
          setPokemon(pokemon);
          setPokemonID(pokemon.id);
          JSON.parse(localStorage.getItem("favorites"))[pokemon.id]
            ? setFavorite(true)
            : setFavorite(false);
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

  const [selected, setSelected] = React.useState("none");
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
        JSON.parse(localStorage.getItem("favorites"))[pokemon.id]
          ? setFavorite(true)
          : setFavorite(false);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="flex flex-col items-center text-center bg-slate-50 min-h-screen overflow-hidden">
      <Header />
      <form
        className="flex flex-col items-center justify-center w-full max-w-sm mt-8"
        onSubmit={(e) => {
          e.preventDefault();
          if (
            pokemon.id !== Number(pokemonID) ||
            pokemonSearch !== pokemon.name
          )
            fetchPokemon(pokemonID, pokemonSearch);
        }}
      >
        <div className="rounded-lg pl-3 py-2 bg-white shadow-md">
          <label>
            #
            <input
              className="ml-1.5 w-9 rounded-full text-center"
              type="text"
              placeholder="ID"
              value={pokemonID}
              onChange={({ target: { value } }) => {
                lastChanged = "id";
                value = value.replace(/[^0-9]/g, "");
                if (value > 898) value = 898;
                setPokemonID(value);
              }}
            />
          </label>
          <input
            className="mx-2 w-28 text-center capitalize bg-slate-50 rounded-full"
            placeholder="Pokemon"
            value={pokemonSearch}
            onChange={({ target: { value } }) => {
              lastChanged = "nameSearch";
              setPokemonSearch(value);
            }}
          />
          <button className="rounded-full text-center pl-1 pr-3" type="submit">
            Search
          </button>
        </div>
      </form>
      <div className="flex flex-wrap items-center justify-center w-full mt-4 px-8">
        <button
          onClick={() => {
            if (selected === "grass") {setSelected("none"); return}
            else {setSelected("grass")}
            if (pokemonIDTypeData["grass"].includes(pokemon.id)) return;
            lastChanged = "id";
            fetchPokemon(getNearestSameTypePokemon("grass", pokemon.id), pokemon.name);
          }}
          className={` mt-4 mx-2 bg-white py-1 px-2 rounded shadow-md transition hover:bg-slate-50 ${selected === "grass" ? "outline outline-2" : ""} `}
        >
          Grass
        </button>
        <button
          onClick={() => {
            if (selected === "fire") {setSelected("none"); return}
            else setSelected("fire")
            if (pokemonIDTypeData["fire"].includes(pokemon.id)) return;
            lastChanged = "id";
            fetchPokemon(getNearestSameTypePokemon("fire", pokemon.id), pokemon.name);
          }}
          className={` mt-4 mx-2 bg-white py-1 px-2 rounded shadow-md transition hover:bg-slate-50 ${selected === "fire" ? "outline outline-2" : ""} `}
        >
          Fire
        </button>
        <button
          onClick={() => {
            if (selected === "water") {setSelected("none"); return}
            else setSelected("water")
            if (pokemonIDTypeData["water"].includes(pokemon.id)) return;
            lastChanged = "id";
            fetchPokemon(getNearestSameTypePokemon("water", pokemon.id), pokemon.name);
          }}
          className={` mt-4 mx-2 bg-white py-1 px-2 rounded shadow-md transition hover:bg-slate-50 ${selected === "water" ? "outline outline-2" : ""} `}
        >
          Water
        </button>
        <button
          onClick={() => {
            if (selected === "bug") {setSelected("none"); return}
            else setSelected("bug")
            if (pokemonIDTypeData["bug"].includes(pokemon.id)) return;
            lastChanged = "id";
            fetchPokemon(getNearestSameTypePokemon("bug", pokemon.id), pokemon.name);
          }}
          className={` mt-4 mx-2 bg-white py-1 px-2 rounded shadow-md transition hover:bg-slate-50 ${selected === "bug" ? "outline outline-2" : ""} `}
        >
          Bug
        </button>
        <button
          onClick={() => {
            if (selected === "normal") {setSelected("none"); return}
            else setSelected("normal")
            if (pokemonIDTypeData["normal"].includes(pokemon.id)) return;
            lastChanged = "id";
            fetchPokemon(getNearestSameTypePokemon("normal", pokemon.id), pokemon.name);
          }}
          className={` mt-4 mx-2 bg-white py-1 px-2 rounded shadow-md transition hover:bg-slate-50 ${selected === "normal" ? "outline outline-2" : ""} `}
        >
          Normal
        </button>
        <button
          onClick={() => {
            if (selected === "electric") {setSelected("none"); return}
            else setSelected("electric")
            if (pokemonIDTypeData["electric"].includes(pokemon.id)) return;
            lastChanged = "id";
            fetchPokemon(getNearestSameTypePokemon("electric", pokemon.id), pokemon.name);
          }}
          className={` mt-4 mx-2 bg-white py-1 px-2 rounded shadow-md transition hover:bg-slate-50 ${selected === "electric" ? "outline outline-2" : ""} `}
        >
          Electric
        </button>
        <button
          onClick={() => {
            if (selected === "psychic") {setSelected("none"); return}
            else setSelected("psychic")
            if (pokemonIDTypeData["psychic"].includes(pokemon.id)) return;
            lastChanged = "id";
            fetchPokemon(getNearestSameTypePokemon("psychic", pokemon.id), pokemon.name);
          }}
          className={` mt-4 mx-2 bg-white py-1 px-2 rounded shadow-md transition hover:bg-slate-50 ${selected === "psychic" ? "outline outline-2" : ""} `}
        >
          Psychic
        </button>
        <button
          onClick={() => {
            if (selected === "ice") {setSelected("none"); return}
            else setSelected("ice")
            if (pokemonIDTypeData["ice"].includes(pokemon.id)) return;
            lastChanged = "id";
            fetchPokemon(getNearestSameTypePokemon("ice", pokemon.id), pokemon.name);
          }}
          className={` mt-4 mx-2 bg-white py-1 px-2 rounded shadow-md transition hover:bg-slate-50 ${selected === "ice" ? "outline outline-2" : ""} `}
        >
          Ice
        </button>
        <button
          onClick={() => {
            if (selected === "ground") {setSelected("none"); return}
            else setSelected("ground")
            if (pokemonIDTypeData["ground"].includes(pokemon.id)) return;
            lastChanged = "id";
            fetchPokemon(getNearestSameTypePokemon("ground", pokemon.id), pokemon.name);
          }}
          className={` mt-4 mx-2 bg-white py-1 px-2 rounded shadow-md transition hover:bg-slate-50 ${selected === "ground" ? "outline outline-2" : ""} `}
        >
          Ground
        </button>
        <button
          onClick={() => {
            if (selected === "rock") {setSelected("none"); return}
            else setSelected("rock")
            if (pokemonIDTypeData["rock"].includes(pokemon.id)) return;
            lastChanged = "id";
            fetchPokemon(getNearestSameTypePokemon("rock", pokemon.id), pokemon.name);
          }}
          className={` mt-4 mx-2 bg-white py-1 px-2 rounded shadow-md transition hover:bg-slate-50 ${selected === "rock" ? "outline outline-2" : ""} `}
        >
          Rock
        </button>
        <button
          onClick={() => {
            if (selected === "fighting") {setSelected("none"); return}
            else setSelected("fighting")
            if (pokemonIDTypeData["fighting"].includes(pokemon.id)) return;
            lastChanged = "id";
            fetchPokemon(getNearestSameTypePokemon("fighting", pokemon.id), pokemon.name);
          }}
          className={` mt-4 mx-2 bg-white py-1 px-2 rounded shadow-md transition hover:bg-slate-50 ${selected === "fighting" ? "outline outline-2" : ""} `}
        >
          Fighting
        </button>
        <button
          onClick={() => {
            if (selected === "ghost") {setSelected("none"); return}
            else setSelected("ghost")
            if (pokemonIDTypeData["ghost"].includes(pokemon.id)) return;
            lastChanged = "id";
            fetchPokemon(getNearestSameTypePokemon("ghost", pokemon.id), pokemon.name);
          }}
          className={` mt-4 mx-2 bg-white py-1 px-2 rounded shadow-md transition hover:bg-slate-50 ${selected === "ghost" ? "outline outline-2" : ""} `}
        >
          Ghost
        </button>
        <button
          onClick={() => {
            if (selected === "dragon") {setSelected("none"); return}
            else setSelected("dragon")
            if (pokemonIDTypeData["dragon"].includes(pokemon.id)) return;
            lastChanged = "id";
            fetchPokemon(getNearestSameTypePokemon("dragon", pokemon.id), pokemon.name);
          }}
          className={` mt-4 mx-2 bg-white py-1 px-2 rounded shadow-md transition hover:bg-slate-50 ${selected === "dragon" ? "outline outline-2" : ""} `}
        >
          Dragon
        </button>
        <button
          onClick={() => {
            if (selected === "flying") {setSelected("none"); return}
            else setSelected("flying")
            if (pokemonIDTypeData["flying"].includes(pokemon.id)) return;
            lastChanged = "id";
            fetchPokemon(getNearestSameTypePokemon("flying", pokemon.id), pokemon.name);
          }}
          className={` mt-4 mx-2 bg-white py-1 px-2 rounded shadow-md transition hover:bg-slate-50 ${selected === "flying" ? "outline outline-2" : ""} `}
        >
          Flying
        </button>
        <button
          onClick={() => {
            if (selected === "poison") {setSelected("none"); return}
            else setSelected("poison")
            if (pokemonIDTypeData["poison"].includes(pokemon.id)) return;
            lastChanged = "id";
            fetchPokemon(getNearestSameTypePokemon("poison", pokemon.id), pokemon.name);
          }}
          className={` mt-4 mx-2 bg-white py-1 px-2 rounded shadow-md transition hover:bg-slate-50 ${selected === "poison" ? "outline outline-2" : ""} `}
        >
          Poison
        </button>
        <button
          onClick={() => {
            if (selected === "dark") {setSelected("none"); return}
            else setSelected("dark")
            if (pokemonIDTypeData["dark"].includes(pokemon.id)) return;
            lastChanged = "id";
            fetchPokemon(getNearestSameTypePokemon("dark", pokemon.id), pokemon.name);
          }}
          className={` mt-4 mx-2 bg-white py-1 px-2 rounded shadow-md transition hover:bg-slate-50 ${selected === "dark" ? "outline outline-2" : ""} `}
        >
          Dark
        </button>
        <button
          onClick={() => {
            if (selected === "steel") {setSelected("none"); return}
            else setSelected("steel")
            if (pokemonIDTypeData["steel"].includes(pokemon.id)) return;
            lastChanged = "id";
            fetchPokemon(getNearestSameTypePokemon("steel", pokemon.id), pokemon.name);
          }}
          className={` mt-4 mx-2 bg-white py-1 px-2 rounded shadow-md transition hover:bg-slate-50 ${selected === "steel" ? "outline outline-2" : ""} `}
        >
          Steel
        </button>
        <button
          onClick={() => {
            if (selected === "fairy") {setSelected("none"); return}
            else setSelected("fairy")
            if (pokemonIDTypeData["fairy"].includes(pokemon.id)) return;
            lastChanged = "id";
            fetchPokemon(getNearestSameTypePokemon("fairy", pokemon.id), pokemon.name);
          }}
          className={` mt-4 mx-2 bg-white py-1 px-2 rounded shadow-md transition hover:bg-slate-50 ${selected === "fairy" ? "outline outline-2" : ""} `}
        >
          Fairy
        </button>
      </div>
      <div className="relative">
        <button
          className="absolute top-1/2 -left-8 -translate-y-1/2 -translate-x-full bg-white py-1 px-2 rounded shadow-md hover:bg-slate-50"
          onClick={() => {
            lastChanged = "id";
            if (pokemonID <= 1) return;
            fetchPokemon(getPreviousSameTypePokemon(selected, pokemonID), pokemonSearch);
          }}
        >
          Previous
        </button>
        {loading ? (
          <div className="shadow-xl rounded-xl h-36 aspect-[2/1] bg-white flex items-center justify-center my-8 overflow-hidden">
            <img
              src={pokedexLoadingGIF}
              className="h-36 opacity-10"
              alt="Loading..."
            />
          </div>
        ) : (
          <Pokemon pokemon={pokemon} />
        )}
        <button
          className="absolute top-1/2 -right-8 -translate-y-1/2 translate-x-full bg-white py-1 px-2 rounded shadow-md transition hover:bg-slate-50"
          onClick={() => {
            lastChanged = "id";
            if (pokemonID >= 898) return;
            fetchPokemon(getNextSameTypePokemon(selected, pokemonID), pokemonSearch);
          }}
        >
          Next
        </button>
        <button
          className="absolute top-8 left-0 bg-white bg-opacity-70 px-2 pt-2.5 pb-1.5 rounded-full backdrop-filter backdrop-blur-[3px] backdrop-saturate-200 border border-white border-opacity-60"
          onClick={() => {
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
      <div>
        <Link
          className="inline-block mr-8 bg-white py-1 px-2 rounded shadow-md transition hover:bg-slate-50"
          to={`/pokemon/${pokemonID}`}
        >
          Details
        </Link>
        <Link
          className="inline-block bg-white py-1 px-2 rounded shadow-md transition hover:bg-slate-50"
          to={`/favorites`}
        >
          Favorites
        </Link>
      </div>
    </div>
  );
}
