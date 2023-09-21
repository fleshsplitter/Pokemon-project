async function getPokemon() {
 const randomNum = function() {return Math.floor((Math.random())*1293)}// quantity of pokemons
  let randomPokemonNum = randomNum();

  const pokemonRandomUrl = `https://pokeapi.co/api/v2/pokemon/${randomPokemonNum}` 
  console.log(pokemonRandomUrl);
  const getPokemonResponse = await fetch(pokemonRandomUrl);

  const pokemonJson = await getPokemonResponse.json();

  function displayPokemon() {
    return document.getElementById('pokeImg').src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomPokemonNum}.png`
  }
  displayPokemon()
  console.log(pokemonJson);

                                         const catchBtn = document.querySelector(".main__btn")
  catchBtn.addEventListener("click", ()=> {
    randomPokemonNum = randomNum();
    displayPokemon();
    console.log(randomPokemonNum);
  })
  // let pokemonBaseUrl="https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
// let response = await fetch(pokemonBaseUrl);

// let pokemonBase = await response.json();
// let pokemonUrl = await pokemonBase.results[Math.floor((Math.random())*1293)].url


// console.log(pokemonUrl);
  // console.log(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
}

getPokemon()
