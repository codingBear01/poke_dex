import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as C from './style';
import { messages } from '../../messages';
import { PokemonInfo } from '../PokemonInfo';

const MainSearchBox = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [isData, setIsData] = useState(false);
  const [isCorrectName, setIsCorrectName] = useState(false);

  const getData = (name: string) => {
    if (!name) return;

    const getUrl = `https://pokeapi.co/api/v2/pokemon/${name}/`;

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
    getData('pikachu');
  }, [isData]);

  const onGetData = () => {
    setIsData(!isData);
    if (!pokemonName) {
      setIsCorrectName(false);
    }
  };

  return (
    <>
      <C.MainSearchBoxWrap>
        <C.MainPokemonLogoWrap>
          <span></span>
        </C.MainPokemonLogoWrap>
        <C.MainSearchBoxInputWrap>
          <input type="text" />
        </C.MainSearchBoxInputWrap>
        <C.MainSearchBoxBtnWrap>
          <span></span>
          SEARCH!
          <span></span>
        </C.MainSearchBoxBtnWrap>

        {!isCorrectName && <span>{messages.noPokemonName}</span>}
      </C.MainSearchBoxWrap>
      {/* {pokemonData && <PokemonInfo pokemonData={pokemonData} />} */}
    </>
  );
};

export default MainSearchBox;
