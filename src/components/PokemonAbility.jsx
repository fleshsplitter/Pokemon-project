/* eslint-disable react/prop-types */
import React from 'react';

const PokemonAbility = (props) => {
  console.log(props.ability)
  let abilityTextObj =
    props.ability.flavor_text_entries.find((version) => {
      return (
        version.version_group.name === 'scarlet-violet')
    })
  const abilityDescription = abilityTextObj?.flavor_text || '';

  return (
    <div>
      <h3>{props.ability.name}</h3>
      <div>{abilityDescription}</div>
    </div>
  );
}

export default PokemonAbility;
