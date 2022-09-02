import React from 'react';
import { PokemonDataProps } from '../../inferfaces';

const PokemonInfo = ({ pokemonData }: PokemonDataProps) => {
  const name = pokemonData.name;

  return (
    <div>
      <div>{name}</div>
    </div>
  );
};

export default PokemonInfo;
