import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PokemonDataProps, SpeciesDataProps } from './interface';
import * as S from './style';
import { colors } from '../../style';
import * as icon from './pokemonInfoIcons';

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
  const animatedFrontSprite =
    pokemonData?.sprites.versions['generation-v']['black-white'].animated
      .front_default;
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

  const backgroundImgs = types?.map((type) => {
    const typeName = type.type.name;
    return icon.TYPES.filter((el, i) => el.name === typeName)[0];
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
  console.log(abilities);
  return (
    <>
      <S.PokemonInfoLeftWrap
        style={{
          boxShadow: `0 0px 5px ${color}`,
        }}
      >
        <S.PokemonNameWrap>
          <S.PokeballImg></S.PokeballImg>
          No. {indexNumber} {name}
          <S.PokeballImg></S.PokeballImg>
        </S.PokemonNameWrap>

        <S.PokemonSpriteWrap>
          <img src={animatedFrontSprite} alt="cloyster" />
        </S.PokemonSpriteWrap>

        <S.PokemonInfoRaw>
          <S.PokemonInfoWrap>
            <S.PokemonInfoTitle>TYPE</S.PokemonInfoTitle>

            <S.PokemonInfoContent>
              {types &&
                types.map((type, i) => (
                  <S.PokemonTypeImgBox
                    key={type.slot}
                    style={{
                      backgroundImage: backgroundImgs
                        ? backgroundImgs[i].imgUrl
                        : '',
                    }}
                  ></S.PokemonTypeImgBox>
                ))}
            </S.PokemonInfoContent>
          </S.PokemonInfoWrap>

          <S.PokemonInfoWrap>
            <S.PokemonInfoTitle>ABILITIES</S.PokemonInfoTitle>

            <S.PokemonInfoContent>
              {abilities &&
                abilities.map((ability, i) => (
                  <S.PokemonAbilBox
                    key={ability.slot}
                    style={{
                      borderRight:
                        i === abilities.length - 1 ? '' : '1px solid',
                      color: ability.is_hidden ? `${color}` : '',
                    }}
                  >
                    {i + 1}. {ability.ability.name}
                  </S.PokemonAbilBox>
                ))}
            </S.PokemonInfoContent>
          </S.PokemonInfoWrap>
        </S.PokemonInfoRaw>
      </S.PokemonInfoLeftWrap>
      <S.PokemonInfoRightDiv>right</S.PokemonInfoRightDiv>
    </>
  );
};

export default PokemonInfo;
