/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
// import React from 'react';
import styles from "./Pokemon.module.scss"
import PokemonAbility from './PokemonAbility';




const Pokemon = (props) => {


  return (
    <section className={styles.main}>
      <div className="pokemon">
        <img className="pokemon__img" alt="pokemon" src={props.pokemon.sprites?.front_default} />
        <div className="pokemon__desc">
          <h2 className="pokemon__name">{props.pokemon.name}</h2>
          <div className="pokemon-properties">Способности:
            <ul>{props.abilities.map((ability, i) => {
              return (
                <li key={i}>
                  <PokemonAbility ability={ability} />
                </li>
              )
            })}</ul>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Pokemon;
