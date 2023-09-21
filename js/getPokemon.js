import randomNum from './randomNum.js';
import displayPokemon from './displayPokemon.js';

async function getPokemon() {
  const pokemonRandomUrl = `https://pokeapi.co/api/v2/pokemon/${randomNum()}`;
  const getPokemonResponse = await fetch(pokemonRandomUrl);

  const pokemonJson = await getPokemonResponse.json();

  displayPokemon();
  console.log(pokemonJson);

  const pokemonName = document.querySelector('.pokemon__name');
  pokemonName.textContent = pokemonJson.name;
}

export default getPokemon;
