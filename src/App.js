import './App.css';
import Pokemon from './components/Pokemon';
import { useState, useEffect } from 'react';

function App() {
  const randomNum = function () {
    return Math.floor(Math.random() * 1000);
  };

  const [pokemon, setPokemon] = useState({})
  const [pokemonRandomUrl, setPokemonRandomUrl] = useState(`https://pokeapi.co/api/v2/pokemon/${randomNum()}`)

  useEffect(() => {
    const getData = async () => {
      const getPokemonResponse = await fetch(pokemonRandomUrl);
      const pokemonJson = await getPokemonResponse.json();
      setPokemon(pokemonJson)
    }
    getData()
  }, [pokemonRandomUrl])
  console.log(pokemon)


  return (
    <div className="App">
      <Pokemon pokemon={pokemon}></Pokemon>
      <button className="btn" onClick={() => setPokemonRandomUrl(`https://pokeapi.co/api/v2/pokemon/${randomNum()}`)}>
        catch the pokemon!
      </button>
    </div>
  );
}

export default App;
