import React from 'react';

const Pokemon = () => {
  return (
    <section className="main">
      <h1 className="main__header">Hello pokemon world!</h1>
      <div className="pokemon">
        <img id="pokeImg" src="" className="pokemon__img" alt="pokemon" />
        <div className="pokemon__desc">
          <h2 className="pokemon__name"></h2>
          <ul className="pokemon-properties">
            <ul className="pokemon-properties__list abilities">Способности:</ul>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pokemon;
