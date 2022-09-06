import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PokemonDataProps, SpeciesDataProps } from './interface';

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
  const name = pokemonName;
  const officialSprites =
    pokemonData?.sprites.other['official-artwork'].front_default;
  const types = pokemonData?.types;
  const moves = pokemonData?.moves;

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
      <div>{name}</div>
      <img src={officialSprites} alt="cloyster" />
    </>
  );
};

export default PokemonInfo;
