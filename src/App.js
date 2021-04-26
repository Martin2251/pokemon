import React, { useState, useEffect } from "react";
import PokemonList from "./PokemonList";

function App() {
  const [pokemonData, setPokemondata] = useState([]);
  const [nextURL, setNextURL];
  return <PokemonList pokemon={pokemon} />;
}

export default App;
