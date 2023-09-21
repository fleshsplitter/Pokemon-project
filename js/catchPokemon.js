import getPokemon from './getPokemon.js';

function catchPokemon() {
  const catchBtn = document.querySelector('.main__btn');
  catchBtn.addEventListener('click', () => {
    getPokemon();
  });
}

export default catchPokemon;
