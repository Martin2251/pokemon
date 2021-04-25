import React, { useState } from "react";
import PokemonList from "./PokemonList";

function App() {
  const [pokemon, setPokemon] = useState(["snorlax", "charmander"]);
  return <PokemonList pokemon={pokemon} />;
}

export default App;
