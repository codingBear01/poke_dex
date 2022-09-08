import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PokemonDataProps, SpeciesDataProps } from './interface';
import * as S from './style';

const PokemonInfo = ({ pokemonData, pokemonName }: PokemonDataProps) => {
  const [speciesData, setSpeciesData] = useState<SpeciesDataProps>({
    base_happiness: null,
    capture_rate: null,
    color: {
      name: null,
      url: null,
    },
    egg_groups: [
      {
        name: null,
        url: null,
      },
    ],
    evolution_chain: {
      url: null,
    },
    flavor_text_entries: null || [
      {
        flavor_text: null,
        language: {
          name: null,
          url: null,
        },
        version: {
          name: null,
          url: null,
        },
      },
    ],
    gender_rate: null,
    genera: null || [
      {
        genus: null,
        language: {
          name: null,
          url: null,
        },
      },
    ],
    growth_rate: {
      name: null,
    },
    hatch_counter: null,
  });

  const abilities = pokemonData?.abilities;
  const baseExperience = pokemonData?.base_experience;
  const forms = pokemonData?.forms;
  const height = pokemonData?.height;
  const heldItems = pokemonData?.held_items;
  const indexNumber = pokemonData?.id;
  const location = pokemonData?.location_area_encounters;
  const name = pokemonName;
  const moves = pokemonData?.moves;
  const sprites = pokemonData?.sprites;
  const officialSprites =
    pokemonData?.sprites.other['official-artwork'].front_default;
  const stats = pokemonData?.stats;
  const types = pokemonData?.types;
  const weight = pokemonData?.weight;
  const baseHappiness = speciesData?.base_happiness;
  const caputerRate = speciesData?.capture_rate;
  const color = speciesData?.color.name;
  const eggGroups = speciesData?.egg_groups;
  const evolutionChain = speciesData?.evolution_chain;
  const flavorText = speciesData?.flavor_text_entries;
  const genderRate = speciesData?.gender_rate;
  const genera = speciesData?.genera;
  const growthRate = speciesData?.growth_rate;
  const hatchCounter = speciesData?.hatch_counter;

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
    fetchPokemonSpeciesData();
  }, []);

  return (
    <>
      <S.PokemonInfoLeftDiv>
        <S.NameWrap>
          <span></span>
          No. {indexNumber} {name}
          <span></span>
        </S.NameWrap>

        <S.PokemonInfoImgDiv>
          <img src={officialSprites} alt="cloyster" />
        </S.PokemonInfoImgDiv>
      </S.PokemonInfoLeftDiv>
      <S.PokemonInfoRightDiv>right</S.PokemonInfoRightDiv>
    </>
  );
};

export default PokemonInfo;
