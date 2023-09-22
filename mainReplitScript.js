const randomNum = function() {
  return Math.floor(Math.random() * 1000);
};

function displayPokemon() {
  return (document.getElementById(
    'pokeImg'
  ).src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomNum()}.png`);
}

async function getPokemon() {
  const pokemonRandomUrl = `https://pokeapi.co/api/v2/pokemon/${randomNum()}`;
  const getPokemonResponse = await fetch(pokemonRandomUrl);

  const pokemonJson = await getPokemonResponse.json();

  displayPokemon();
  console.log(pokemonJson);

  const pokemonName = document.querySelector('.pokemon__name');
  pokemonName.textContent = pokemonJson.name;
}

function catchPokemon() {
  const catchBtn = document.querySelector('.main__btn');
  catchBtn.addEventListener('click', () => {
    getPokemon();
  });
}

getPokemon();
catchPokemon();