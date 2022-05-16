import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Pokedex from "./components/Pokedex";
import PokemonDetails from "./components/PokemonDetails";
import Favorites from "./components/Favorites";
import About from "./components/About";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Pokedex} />
          <Route path="/pokemon/:pokemon" render={(props) => <PokemonDetails {...props} />} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/about" component={About} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
