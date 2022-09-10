import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PokemonDataProps, SpeciesDataProps } from './interface';
import * as S from './style';
import { colors } from '../../style';
import * as data from './pokemonInfoData';

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
  const height = pokemonData ? pokemonData?.height / 10 : 0;
  const heldItems = pokemonData?.held_items;
  const indexNumber = pokemonData?.id;
  const location = pokemonData?.location_area_encounters;
  const name = pokemonName
    ? pokemonName.split('')[0].toUpperCase() +
      pokemonName.split('').slice(1).join('')
    : '';
  const moves = pokemonData?.moves;
  const animatedFrontSprite =
    pokemonData?.sprites.versions['generation-v']['black-white'].animated
      .front_default;
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
  const totalExperience = data.TOTAL_EXPERIENCES.filter(
    (exp) => exp.name === speciesData.growth_rate.name
  )[0].experience;
  const hatchCounter = speciesData?.hatch_counter;
  const backgroundImgs = types?.map((type) => {
    const typeName = type.type.name;
    return data.TYPES.filter((el, i) => el.name === typeName)[0];
  });

  console.log(evolutionChain);

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
      <S.PokemonInfoLeftWrap style={{ boxShadow: `0 0 5px 1px ${color}` }}>
        <S.PokemonNameWrap style={{ boxShadow: `0 0 5px 1px ${color}` }}>
          <S.PokeballImg></S.PokeballImg>
          No. {indexNumber} {name}
          <S.PokeballImg></S.PokeballImg>
        </S.PokemonNameWrap>

        <S.PokemonSpriteWrap style={{ boxShadow: `0 0 5px 1px ${color}` }}>
          <img src={animatedFrontSprite} alt="cloyster" />
        </S.PokemonSpriteWrap>

        {/* types & abilities */}
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
                  <S.PokemonAbilSpan
                    key={ability.slot}
                    style={{
                      borderRight:
                        i === abilities.length - 1 ? '' : '1px solid',
                      color: ability.is_hidden ? `${color}` : '',
                    }}
                  >
                    {i + 1}. {ability.ability.name}
                  </S.PokemonAbilSpan>
                ))}
            </S.PokemonInfoContent>
          </S.PokemonInfoWrap>
        </S.PokemonInfoRaw>

        <S.PokemonInfoRaw>
          <S.PokemonInfoWrap>
            <S.PokemonInfoTitle>HEIGHT</S.PokemonInfoTitle>
            <S.PokemonInfoContent style={{ width: '80px' }}>
              {height}m
            </S.PokemonInfoContent>
          </S.PokemonInfoWrap>

          <S.PokemonInfoWrap>
            <S.PokemonInfoTitle>WEIGHT</S.PokemonInfoTitle>
            <S.PokemonInfoContent style={{ width: '80px' }}>
              {weight}kg
            </S.PokemonInfoContent>
          </S.PokemonInfoWrap>

          <S.PokemonInfoWrap>
            <S.PokemonInfoTitle
              style={{
                lineHeight: '50px',
              }}
            >
              GENDER RATE
            </S.PokemonInfoTitle>
            <S.PokemonInfoContent
              style={{
                alignItems: 'flex-start',
                flexDirection: 'column',
                paddingLeft: '10px',
                width: '120px',
              }}
            >
              {genderRate === -1 && <span>GENDERLESS</span>}
              {genderRate !== -1 && (
                <>
                  <span>MALE: {maleRate}%</span>
                  <span>FEMALE: {femaleRate}%</span>
                </>
              )}
            </S.PokemonInfoContent>
          </S.PokemonInfoWrap>
        </S.PokemonInfoRaw>

        <S.PokemonInfoRaw>
          <S.PokemonInfoWrap>
            <S.PokemonInfoTitle>TOTAL EXPERIENCE</S.PokemonInfoTitle>
            <S.PokemonInfoContent style={{ width: '80px' }}>
              {totalExperience.toLocaleString()}
            </S.PokemonInfoContent>
          </S.PokemonInfoWrap>

          <S.PokemonInfoWrap>
            <S.PokemonInfoTitle>CAPTURE RATE</S.PokemonInfoTitle>
            <S.PokemonInfoContent style={{ width: '80px' }}>
              {captureRate}
            </S.PokemonInfoContent>
          </S.PokemonInfoWrap>

          <S.PokemonInfoWrap>
            <S.PokemonInfoTitle>BASE HAPPINESS</S.PokemonInfoTitle>
            <S.PokemonInfoContent style={{ width: '80px' }}>
              {baseHappiness}
            </S.PokemonInfoContent>
          </S.PokemonInfoWrap>
        </S.PokemonInfoRaw>
      </S.PokemonInfoLeftWrap>

      <S.PokemonInfoRightDiv></S.PokemonInfoRightDiv>
    </>
  );
};

export default PokemonInfo;
