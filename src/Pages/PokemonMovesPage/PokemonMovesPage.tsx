import React, { useEffect } from 'react';
import axios from 'axios';
import { PokemonPageProps } from '../../store';
import { NavBar, PokemonSpriteArea } from '../../components';
import { leftSideStyle } from '../../style';

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

  const fetchPokemonData = () => {
    const getUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;

    axios
      .get(getUrl)
      .then((res) => {
        console.log('get poke res', res);
        setPokemonData(res.data);
      })
      .catch((err) => {
        const error = new Error(err);
        console.log('get poke err', error);
      });
  };

  const fetchPokemonSpeciesData = () => {
    const getUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}/`;

    axios
      .get(getUrl)
      .then((res) => {
        console.log('get poke spe res', res);
        setSpeciesData(res.data);
      })
      .catch((err) => {
        const error = new Error(err);
        console.log('get poke spe err', error);
      });
  };

  useEffect(() => {
    if (!pokemonName) return;

    fetchPokemonData();
    fetchPokemonSpeciesData();
  }, []);

  return (
    <>
      <div style={leftSideStyle}>
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
