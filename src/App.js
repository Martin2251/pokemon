import React, { useState, useEffect } from "react";
import PokemonList from "./PokemonList";

function App() {
  const [pokemonData, setPokemondata] = useState([]);
  const [nextURL, setNextURL] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const initialURL = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    async fetchData() {
      let response = await getAllPokemon(initialURL);
      setNextURL(response.next);
      setPrevUrl(response.previous);
      setLoading(false);
    }
    }
  }, [])
  return (
    <div>
      { loading ? <h1>Loading...</h1> : (
        <h1>Data is fetched</h1>
      )}
    </div>

  );
}

export default App;
