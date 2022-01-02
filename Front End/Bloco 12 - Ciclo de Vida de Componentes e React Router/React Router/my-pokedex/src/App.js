import React from "react";
import Pokemon from "./components/Pokemon";
import Pokedex from "./components/Pokedex";

function App() {
  return (
    <div className="">
      <header className="text-center p-2 border-b border-gray-300">
        <h1 className="text-3xl">Pokedex</h1>
      </header>
      <Pokedex />
    </div>
  );
}

export default App;
