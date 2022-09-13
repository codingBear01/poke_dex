import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from './style';
import { messages } from '../../messages';

const MainPage = () => {
  const [isCorrectName, setIsCorrectName] = useState(true);
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonNames, setPokemonNames] = useState([]);
  const allPokemonNames: string[] = pokemonNames.map((el) => el['name']);
  const navigate = useNavigate();

  const fetchAllPokemonData = () => {
    const getUrl =
      'https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=905';

    axios
      .get(getUrl)
      .then((res) => {
        console.log('get all pokemon name', res.data.results);
        setPokemonNames(res.data.results);
      })
      .catch((err) => {
        const error = new Error(err);
        console.log('err all pokemon name', error);
      });
  };

  useEffect(() => {
    fetchAllPokemonData();
  }, []);

  const onChangePokemonName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value.toLowerCase();
    setPokemonName(val);
  };

  const pokemonNameChecker = () => {
    if (allPokemonNames.includes(pokemonName)) {
      setIsCorrectName(true);
      localStorage.setItem('pokemonName', pokemonName);
      navigate('pokemon-info');
    } else {
      setIsCorrectName(false);
    }
  };

  const onClickCheckPokemonName = () => {
    pokemonNameChecker();
  };

  const onKeyDownCheckPokemonName = (e: React.KeyboardEvent<HTMLElement>) => {
    const key = e.key;
    if (key !== 'Enter') return;
    pokemonNameChecker();
  };

  return (
    <>
      <S.MainSearchBoxWrap>
        <S.MainPokemonLogoWrap>
          <S.MainPokemonLogo></S.MainPokemonLogo>
        </S.MainPokemonLogoWrap>

        <S.MainSearchBoxIconWrap>
          <S.MainSearchBoxIcon></S.MainSearchBoxIcon>
          <S.MainSearchBoxIcon></S.MainSearchBoxIcon>
          <S.MainSearchBoxIcon></S.MainSearchBoxIcon>
          <S.MainSearchBoxIcon></S.MainSearchBoxIcon>
          <S.MainSearchBoxIcon></S.MainSearchBoxIcon>
          <S.MainSearchBoxIcon></S.MainSearchBoxIcon>
        </S.MainSearchBoxIconWrap>

        <S.MainSearchBoxInputWrap>
          <S.MainSearchBoxInput
            type="text"
            onChange={onChangePokemonName}
            onKeyDown={onKeyDownCheckPokemonName}
          />
        </S.MainSearchBoxInputWrap>

        <S.MainSearchBoxBtn onClick={onClickCheckPokemonName}>
          <S.MainSearchBoxPokeballImg></S.MainSearchBoxPokeballImg>
          SEARCH!
          <S.MainSearchBoxPokeballImg></S.MainSearchBoxPokeballImg>
        </S.MainSearchBoxBtn>

        {!isCorrectName && (
          <span style={S.AlertMsgStyle}>{messages.noPokemonName}</span>
        )}
      </S.MainSearchBoxWrap>
    </>
  );
};

export default MainPage;
