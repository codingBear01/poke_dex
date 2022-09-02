import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as C from './style';
import { messages } from '../../messages';
import { PokemonInfo } from '../PokemonInfo';

const MainSearchBox = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [isData, setIsData] = useState(false);
  const [isInCorrectName, setIsInCorrectName] = useState(false);

  const getData = (name: string) => {
    if (!name) return;

    const getUrl = `https://pokeapi.co/api/v2/pokemon/${name}/`;

    axios
      .get(getUrl)
      .then((res) => {
        console.log('get poke res', res);
        setPokemonData(res.data);
        setIsInCorrectName(false);
      })
      .catch((err) => {
        console.log('get poke err', err);
        setIsInCorrectName(true);
      });
  };

  useEffect(() => {
    getData(pokemonName);
  }, [isData]);

  const onGetData = () => {
    setIsData(!isData);
    if (!pokemonName) setIsInCorrectName(true);
  };

  return (
    <>
      {!pokemonData && (
        <C.MainSearchBoxWrap>
          <C.MainPokemonLogoWrap>
            <h1>POKE DEX</h1>
          </C.MainPokemonLogoWrap>
          <C.MainSearchInputWrap>
            <input
              type="text"
              onChange={(e) => setPokemonName(e.currentTarget.value)}
            />
          </C.MainSearchInputWrap>
          <C.MainSearchBtnWrap>
            <button onClick={onGetData}>SEARCH</button>
          </C.MainSearchBtnWrap>
          {isInCorrectName && <span>{messages.noPokemonName}</span>}
        </C.MainSearchBoxWrap>
      )}
      {pokemonData && <PokemonInfo pokemonData={pokemonData} />}
    </>
  );
};

export default MainSearchBox;
