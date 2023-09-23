import randomNum from './randomNum';

function displayPokemon() {
  return (document.getElementById(
    'pokeImg'
  ).src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomNum()}.png`);
}

export default displayPokemon;
