import displayPokemon from './displayPokemon';
import randomNum from './randomNum';

async function getPokemon() {
  const pokemonRandomUrl = `https://pokeapi.co/api/v2/pokemon/${randomNum()}`;
  const getPokemonResponse = await fetch(pokemonRandomUrl);

  const pokemonJson = await getPokemonResponse.json();

  displayPokemon();
  console.log(pokemonJson);

  const pokemonName = document.querySelector('.pokemon__name');
  const pokemonAbilitiesList = document.querySelector('.pokemon-properties');
  pokemonAbilitiesList.innerHTML = '';
  pokemonAbilitiesList.textContent = 'Способности:';
  pokemonName.textContent = pokemonJson.name;

  for (const el of pokemonJson.abilities) {
    let abilityGroup = document.createElement('li');
    abilityGroup.classList.add('ability__group');

    let abilityName = document.createElement('div');
    abilityName.classList.add('ability__name');
    abilityName.textContent = el.ability.name;
    abilityGroup.appendChild(abilityName);

    let abilityDesc = document.createElement('div');
    abilityDesc.classList.add('ability__desc');
    let abilityDescUrl = el.ability.url;
    let abilityDescResponse = await fetch(`${abilityDescUrl}`);
    let abilityDescJson = await abilityDescResponse.json();
    abilityDesc.textContent =
      abilityDescJson.flavor_text_entries[0].flavor_text;

    abilityGroup.appendChild(abilityDesc);
    pokemonAbilitiesList.appendChild(abilityGroup);
  }
}

export default getPokemon;
