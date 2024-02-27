/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import Pokemon from './components/Pokemon';
import { useState, useEffect } from 'react';

function App() {
  const randomNum = function () {
    return Math.floor(Math.random() * 1000);
  };
  const getRequest = async (url) => {
    const getResponse = await fetch(url);
    const json = await getResponse.json();
    return json
  }

  const [pokemon, setPokemon] = useState(false)
  const [pokemonRandomUrl, setPokemonRandomUrl] = useState(`https://pokeapi.co/api/v2/pokemon/${randomNum()}`)
  const [abilities, setAbilities] = useState([])

  useEffect(() => {
    const getData = async () => {
      const pokemonData = await getRequest(pokemonRandomUrl);
      setPokemon(pokemonData);

      if (pokemonData.abilities?.length) {
        const abilitiesData = await Promise.all(
          pokemonData.abilities.map(({ ability }) => getRequest(ability.url)),
        );
        setAbilities(abilitiesData);
      }
    }
    getData()

  }, [pokemonRandomUrl])
  // console.log(pokemon)
  // console.log(abilities)

  return (
    <div className="App">
      <Pokemon pokemon={pokemon} abilities={abilities}>
      </Pokemon>
      <button className="btn" onClick={() => setPokemonRandomUrl(`https://pokeapi.co/api/v2/pokemon/${randomNum()}`)}>
        catch the pokemon!
      </button>
    </div>
  );
}

export default App;
