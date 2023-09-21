async function getPokemon() {
 const randomNum = Math.floor((Math.random())*1293) // quantity of pokemons

  const pokemonRandomUrl = `https://pokeapi.co/api/v2/pokemon/${randomNum}` 
  console.log(pokemonRandomUrl);
  const getPokemonResponse = await fetch(pokemonRandomUrl);

  const pokemonJson = await getPokemonResponse.json();

  await (document.getElementById('pokeImg').src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomNum}.png`);
  console.log(pokemonJson);
  // let pokemonBaseUrl="https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
// let response = await fetch(pokemonBaseUrl);

// let pokemonBase = await response.json();
// let pokemonUrl = await pokemonBase.results[Math.floor((Math.random())*1293)].url


// console.log(pokemonUrl);
  // console.log(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
}

getPokemon()
