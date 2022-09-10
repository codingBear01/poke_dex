import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as C from './style';
import { messages } from '../../messages';
import { PokemonInfo } from '../PokemonInfo';

const MainSearchBox = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [isData, setIsData] = useState(false);
  const [isCorrectName, setIsCorrectName] = useState(true);

  const fetchPokemonData = () => {
    const getUrl = `https://pokeapi.co/api/v2/pokemon/magnemite/`;

    axios
      .get(getUrl)
      .then((res) => {
        console.log('get poke res', res);
        setPokemonData(res.data);
        setIsCorrectName(true);
      })
      .catch((err) => {
        console.log('get poke err', err);
        setIsCorrectName(false);
      });
  };

  useEffect(() => {
    // if (!pokemonName) return;
    fetchPokemonData();
  }, [isData]);

  const handleChangePokemonName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    setPokemonName(val);
  };

  const handleClickSetIsData = () => {
    setIsData(!isData);
  };

  const handleKeyPressSetIsData = (e: React.KeyboardEvent<HTMLElement>) => {
    const key = e.key;
    console.log(e);
    if (key !== 'Enter') return;
    setIsData(!isData);
  };

  return (
    <>
      {/* <C.MainSearchBoxWrap>
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
            onChange={handleChangePokemonName}
            onKeyDown={handleKeyPressSetIsData}
          />
        </C.MainSearchBoxInputWrap>

        <C.MainSearchBoxBtnWrap onClick={handleClickSetIsData}>
          <span></span>
          SEARCH!
          <span></span>
        </C.MainSearchBoxBtnWrap>

        {!isCorrectName && (
          <span style={C.AlertMsgStyle}>{messages.noPokemonName}</span>
        )}
      </C.MainSearchBoxWrap> */}

      {/* {pokemonData && <PokemonInfo pokemonData={pokemonData} />} */}
      <PokemonInfo pokemonData={pokemonData} pokemonName={'charizard'} />
    </>
  );
};

export default MainSearchBox;
