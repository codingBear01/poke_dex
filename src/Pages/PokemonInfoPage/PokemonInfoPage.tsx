import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PokemonInfoPageProps } from '../../store/interfaces';
import * as S from './style';
import { colors } from '../../style';
import * as data from './pokemonInfoData';
import { PokemonSpriteArea } from '../../components';

const PokemonInfoPage = ({
  setPokemonData,
  pokemonData,
  setSpeciesData,
  speciesData,
}: PokemonInfoPageProps) => {
  const pokemonName = localStorage.getItem('pokemonName');

  const abilities = pokemonData?.abilities;
  const height = pokemonData ? pokemonData?.height / 10 : 0;
  const heldItems = pokemonData?.held_items;
  const indexNumber = pokemonData?.id;
  const location = pokemonData?.location_area_encounters;
  const name = pokemonName
    ? pokemonName.split('')[0].toUpperCase() +
      pokemonName.split('').slice(1).join('')
    : '';
  const moves = pokemonData?.moves;
  const officialSprite =
    pokemonData?.sprites.other['official-artwork'].front_default;
  const stats = pokemonData?.stats;
  const types = pokemonData?.types;
  const weight = pokemonData ? pokemonData.weight / 10 : 0;
  const baseHappiness = speciesData?.base_happiness;
  const captureRate = speciesData?.capture_rate;
  const color = speciesData?.color.name;
  const eggGroups = speciesData?.egg_groups;
  const evolutionChain = speciesData?.evolution_chain;
  const flavorText = speciesData?.flavor_text_entries;
  const genderRate = speciesData?.gender_rate;
  const maleRate = genderRate ? (8 - genderRate) * 12.5 : 0;
  const femaleRate = genderRate ? genderRate * 12.5 : 0;
  const genera = speciesData?.genera;
  const totalExperience = speciesData?.growth_rate.name
    ? data.TOTAL_EXPERIENCES.filter(
        (exp) => exp.name === speciesData.growth_rate.name
      )[0].experience
    : 0;
  const hatchCounter = speciesData?.hatch_counter;
  const backgroundImgs = types?.map((type) => {
    const typeName = type.type.name;
    return data.TYPES.filter((el, i) => el.name === typeName)[0];
  });

  // btn 클릭 시 parameter 전달하는 식으로 수정
  // method: machine, level-up, tutor,
  // const moves = pokemonData?.moves.map((move) => {
  //   if (
  //     move.version_group_details.filter((versionGroupDetail) => {
  //       const method = versionGroupDetail.move_learn_method.name;
  //       return method === 'level-up';
  //     })[0] !== undefined
  //   ) {
  //     return move.move.name;
  //   }
  // });

  const fetchPokemonData = () => {
    const getUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;

    axios
      .get(getUrl)
      .then((res) => {
        console.log('get poke res', res);
        setPokemonData(res.data);
      })
      .catch((err) => {
        console.log('get poke err', err);
      });
  };

  const fetchPokemonSpeciesData = () => {
    if (!pokemonName) return;

    const getUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}/`;

    axios
      .get(getUrl)
      .then((res) => {
        console.log('get poke spe res', res);
        setSpeciesData(res.data);
      })
      .catch((err) => {
        console.log('get poke spe err', err);
      });
  };

  useEffect(() => {
    fetchPokemonData();
    fetchPokemonSpeciesData();
  }, []);

  return (
    <>
      <div>infos</div>
      <PokemonSpriteArea
        name={name}
        officialSprite={officialSprite}
        indexNumber={indexNumber}
        color={color}
      />
    </>
  );
};

export default PokemonInfoPage;
