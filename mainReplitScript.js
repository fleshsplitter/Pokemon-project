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
  const pokemonAbilitiesList = document.querySelector(".pokemon-properties")
  pokemonAbilitiesList.innerHTML=""
  const pokemonAbility = document.querySelector(".ability")
  
  pokemonName.textContent = pokemonJson.name;
  
pokemonJson.abilities.forEach((el) => {
  let li = document.createElement("li");
  li.classList.add(".ability");  
  li.textContent=el.ability.name;
  pokemonAbilitiesList.appendChild(li);
  });
}

function catchPokemon() {
  const catchBtn = document.querySelector('.main__btn');
  catchBtn.addEventListener('click', () => {
    getPokemon();
  });
}

getPokemon();
catchPokemon();