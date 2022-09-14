import React, { useEffect } from 'react';
import axios from 'axios';
import { PokemonPageProps } from '../../store';
import * as data from './pokemonInfoData';
import * as S from './style';
import { colors, leftSideStyle } from '../../style';
import { NavBar, PokemonSpriteArea } from '../../components';

const PokemonInfoPage = ({
  setPokemonData,
  pokemonData,
  setSpeciesData,
  speciesData,
}: PokemonPageProps) => {
  const pokemonName = localStorage.getItem('pokemonName');
  const abilities = pokemonData?.abilities;
  const baseHappiness = speciesData?.base_happiness;
  const captureRate = speciesData?.capture_rate;
  const color = speciesData?.color.name;
  const eggGroups = speciesData?.egg_groups;
  const hatchCounter = speciesData?.hatch_counter
    ? 255 * speciesData?.hatch_counter + speciesData?.hatch_counter
    : 0;
  const genus = speciesData?.genera?.filter((el) => {
    const lang = el.language.name;
    return lang === 'en';
  })[0].genus;
  const genderRate = speciesData?.gender_rate;
  const maleRate = genderRate ? (8 - genderRate) * 12.5 : 0;
  const femaleRate = genderRate ? genderRate * 12.5 : 0;
  const height = pokemonData ? pokemonData?.height / 10 : 0;
  const weight = pokemonData ? pokemonData.weight / 10 : 0;
  const heldItems = pokemonData?.held_items;
  const indexNumber = pokemonData?.id;
  const name = pokemonName
    ? pokemonName.split('')[0].toUpperCase() +
      pokemonName.split('').slice(1).join('')
    : '';
  const officialSprite =
    pokemonData?.sprites.other['official-artwork'].front_default;
  const types = pokemonData?.types;
  const totalExperience = speciesData?.growth_rate.name
    ? data.TOTAL_EXPERIENCES.filter(
        (exp) => exp.name === speciesData.growth_rate.name
      )[0].experience
    : 0;
  const typeImgs = types?.map((type) => {
    const typeName = type.type.name;
    return data.TYPES.filter((el) => el.name === typeName)[0];
  });

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
        <S.PokemonInfoWrap>
          <S.PokemonInfoBox>
            <S.PokemonInfoTitle>Type</S.PokemonInfoTitle>
            <S.PokemonInfoContent>
              {typeImgs &&
                typeImgs.map((img) => (
                  <S.PokemonInfoTypeImg
                    key={img.id}
                    style={{
                      backgroundImage: img.imgUrl,
                    }}
                  ></S.PokemonInfoTypeImg>
                ))}
            </S.PokemonInfoContent>
          </S.PokemonInfoBox>

          <S.PokemonInfoBox>
            <S.PokemonInfoTitle>Abilities</S.PokemonInfoTitle>
            <S.PokemonInfoContent>
              {abilities &&
                abilities.map((ability, i) => (
                  <S.PokemonInfoContentSpan
                    key={ability.slot}
                    style={{
                      color: ability.slot === 3 ? `${color}` : '',
                      textShadow:
                        ability.slot === 3
                          ? `-1px 0 ${colors.black}, 0 1px ${colors.black}, 1px 0 ${colors.black}, 0 -1px ${colors.black}`
                          : '',
                    }}
                  >
                    {i + 1}. {ability.ability.name}
                  </S.PokemonInfoContentSpan>
                ))}
            </S.PokemonInfoContent>
          </S.PokemonInfoBox>

          <S.PokemonInfoBox>
            <S.PokemonInfoTitle>Height</S.PokemonInfoTitle>
            <S.PokemonInfoContent>{height} m</S.PokemonInfoContent>
          </S.PokemonInfoBox>

          <S.PokemonInfoBox>
            <S.PokemonInfoTitle>Weight</S.PokemonInfoTitle>
            <S.PokemonInfoContent>{weight} kg</S.PokemonInfoContent>
          </S.PokemonInfoBox>

          <S.PokemonInfoBox>
            <S.PokemonInfoTitle>Total Experience</S.PokemonInfoTitle>
            <S.PokemonInfoContent>
              {totalExperience.toLocaleString()}
            </S.PokemonInfoContent>
          </S.PokemonInfoBox>

          <S.PokemonInfoBox>
            <S.PokemonInfoTitle>Base Happiness</S.PokemonInfoTitle>
            <S.PokemonInfoContent>{baseHappiness}</S.PokemonInfoContent>
          </S.PokemonInfoBox>

          <S.PokemonInfoBox>
            <S.PokemonInfoTitle>Capture Rate</S.PokemonInfoTitle>
            <S.PokemonInfoContent>{captureRate}</S.PokemonInfoContent>
          </S.PokemonInfoBox>

          {/* held items에 추후 img 넣기 */}
          <S.PokemonInfoBox>
            <S.PokemonInfoTitle>Held Items</S.PokemonInfoTitle>
            <S.PokemonInfoContent>
              {heldItems && heldItems[0] === undefined && <span>NONE</span>}
              {heldItems &&
                heldItems.map((item, i) => (
                  <S.PokemonInfoContentSpan key={item.item.name}>
                    {i + 1}. {item.item.name}
                  </S.PokemonInfoContentSpan>
                ))}
            </S.PokemonInfoContent>
          </S.PokemonInfoBox>

          <S.PokemonInfoBox>
            <S.PokemonInfoTitle>Gender Rate</S.PokemonInfoTitle>
            <S.PokemonInfoContent>
              {genderRate === -1 && <span>GENDERLESS</span>}
              {genderRate !== -1 && (
                <>
                  <S.PokemonInfoContentSpan>
                    Male: {maleRate} %
                  </S.PokemonInfoContentSpan>
                  <S.PokemonInfoContentSpan>
                    Female: {femaleRate} %
                  </S.PokemonInfoContentSpan>
                </>
              )}
            </S.PokemonInfoContent>
          </S.PokemonInfoBox>

          <S.PokemonInfoBox>
            <S.PokemonInfoTitle>Egg Groups</S.PokemonInfoTitle>
            <S.PokemonInfoContent>
              {eggGroups &&
                eggGroups.map((group, i) => (
                  <S.PokemonInfoContentSpan key={group.name}>
                    {group.name !== 'no-eggs' && `${i + 1}. `}
                    {group.name}
                  </S.PokemonInfoContentSpan>
                ))}
            </S.PokemonInfoContent>
          </S.PokemonInfoBox>

          <S.PokemonInfoBox>
            <S.PokemonInfoTitle>Hatch Counter</S.PokemonInfoTitle>
            <S.PokemonInfoContent>
              {hatchCounter.toLocaleString()}
            </S.PokemonInfoContent>
          </S.PokemonInfoBox>

          <S.PokemonInfoBox>
            <S.PokemonInfoTitle>Genus</S.PokemonInfoTitle>
            <S.PokemonInfoContent>{genus}</S.PokemonInfoContent>
          </S.PokemonInfoBox>
        </S.PokemonInfoWrap>
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

export default PokemonInfoPage;
