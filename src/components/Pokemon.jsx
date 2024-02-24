import React from 'react';
import styles from "./Pokemon.module.scss"




const Pokemon = (props) => {




  return (
    <section className={styles.main}>
      <div className="pokemon">
        <img className="pokemon__img" alt="pokemon" src={props.pokemon.sprites?.front_default} />
        <div className="pokemon__desc">
          <h2 className="pokemon__name">{props.pokemon.name}</h2>
          <ul className="pokemon-properties">
            <ul className="pokemon-properties__list abilities">Способности:</ul>
          </ul>
        </div>
      </div>
    </section >
  );
};

export default Pokemon;
