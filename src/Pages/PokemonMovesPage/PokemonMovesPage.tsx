import React from 'react';
import { NavBar, PokemonSpriteArea } from '../../components';
import { PokemonPageProps } from '../../store/interfaces';

const PokemonMovesPage = ({
  setPokemonData,
  pokemonData,
  setSpeciesData,
  speciesData,
}: PokemonPageProps) => {
  const pokemonName = localStorage.getItem('pokemonName');
  const name = pokemonName
    ? pokemonName.split('')[0].toUpperCase() +
      pokemonName.split('').slice(1).join('')
    : '';
  const officialSprite =
    pokemonData?.sprites.other['official-artwork'].front_default;
  const indexNumber = pokemonData?.id;
  const color = speciesData?.color.name;

  console.log(pokemonData);

  return (
    <>
      <div
        style={{
          display: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          msFlexDirection: 'column',
        }}
      >
        <NavBar />
        <div>moves</div>
      </div>

      <PokemonSpriteArea
        name={name}
        officialSprite={officialSprite}
        indexNumber={indexNumber}
        color={color}
      />
    </>
  );
};

export default PokemonMovesPage;
