import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as C from './style';
import { messages } from '../../messages';
import { MainPageProps } from '../../store/interfaces';

const MainPage = ({
  setPokemonData,
  setPokemonName,
  pokemonName,
}: MainPageProps) => {
  const [isCorrectName, setIsCorrectName] = useState(true);
  const navigate = useNavigate();

  const fetchPokemonData = () => {
    const getUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;

    axios
      .get(getUrl)
      .then((res) => {
        console.log('get poke res', res);
        setPokemonData(res.data);
        setIsCorrectName(true);
        navigate('/pokemon-info');
      })
      .catch((err) => {
        console.log('get poke err', err);
        setIsCorrectName(false);
      });
  };

  const onChangePokemonName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value.toLowerCase();
    setPokemonName(val);
  };

  return (
    <>
      <C.MainSearchBoxWrap>
        <C.MainPokemonLogoWrap>
          <span></span>
        </C.MainPokemonLogoWrap>

        <C.MainSearchBoxIconWrap>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </C.MainSearchBoxIconWrap>

        <C.MainSearchBoxInputWrap>
          <input
            type="text"
            onChange={onChangePokemonName}
            onKeyDown={(e) => {
              if (e.key !== 'Enter') return;
              fetchPokemonData();
            }}
          />
        </C.MainSearchBoxInputWrap>

        <C.MainSearchBoxBtnWrap onClick={fetchPokemonData}>
          <span></span>
          SEARCH!
          <span></span>
        </C.MainSearchBoxBtnWrap>

        {!isCorrectName && (
          <span style={C.AlertMsgStyle}>{messages.noPokemonName}</span>
        )}
      </C.MainSearchBoxWrap>
    </>
  );
};

export default MainPage;
