import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PokemonPageProps } from '../../store';
import { NavBar, PokemonSpriteArea } from '../../components';
import { leftSideStyle } from '../../style';

const EvolutionaryChainPage = ({
  setPokemonData,
  pokemonData,
  setSpeciesData,
  speciesData,
}: PokemonPageProps) => {
  const [evolutionaryChainData, setEvolutionaryChainData] = useState(null);
  const [secondEvolutionData, setSecondEvolutionData] = useState(null);
  const [thirdEvolutionData, setThirdEvolutionData] = useState(null);

  const pokemonName = localStorage.getItem('pokemonName');
  const name = pokemonName
    ? pokemonName.split('')[0].toUpperCase() +
      pokemonName.split('').slice(1).join('')
    : '';
  const officialSprite =
    pokemonData?.sprites.other['official-artwork'].front_default;
  const indexNumber = pokemonData?.id;
  const color = speciesData?.color.name;
  const evolutionaryChain = evolutionaryChainData?.['chain'];
  const secondEvolutionName =
    evolutionaryChain?.['evolves_to'][0]?.['species']?.['name'];
  const secondEvolutionUrl =
    evolutionaryChain?.['evolves_to'][0]?.['species']?.['url'];
  const thirdEvolutionName =
    evolutionaryChain?.['evolves_to'][0]?.['evolves_to'][0]?.['species']?.[
      'name'
    ];
  const thirdEvolutionUrl =
    evolutionaryChain?.['evolves_to'][0]?.['evolves_to'][0]?.['species']?.[
      'url'
    ];
  const secondEvolutionSprite =
    secondEvolutionData?.['sprites']?.['other']?.['official-artwork']?.[
      'front_default'
    ];
  const thirdEvolutionSprite =
    thirdEvolutionData?.['sprites']?.['other']?.['official-artwork']?.[
      'front_default'
    ];
  const secondMinLevel =
    evolutionaryChain?.['evolves_to'][0]?.['evolution_details'][0]?.[
      'min_level'
    ];
  const thirdMinLevel =
    evolutionaryChain?.['evolves_to'][0]?.['evolves_to'][0]?.[
      'evolution_details'
    ][0]?.['min_level'];

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

  const fetchEvolutionaryChainData = () => {
    if (!speciesData) return;

    const evolutionaryChainUrl = speciesData
      ? speciesData?.evolution_chain.url
      : '';

    axios
      .get(evolutionaryChainUrl)
      .then((res) => {
        console.log('get ev res', res);
        setEvolutionaryChainData(res.data);
      })
      .catch((err) => {
        const error = new Error(err);
        console.log('get ev err', error);
      });
  };

  const fetchSecondEvolutionData = () => {
    if (!secondEvolutionName) return;

    const secondEvolutionUrl = `https://pokeapi.co/api/v2/pokemon/${secondEvolutionName}/`;

    axios
      .get(secondEvolutionUrl)
      .then((res) => {
        console.log('get sec res', res);
        setSecondEvolutionData(res.data);
      })
      .catch((err) => {
        const error = new Error(err);
        console.log('get sec err', error);
      });
  };

  const fetchThirdEvolutionData = () => {
    if (!thirdEvolutionName) return;

    const thirdEvolutionUrl = `https://pokeapi.co/api/v2/pokemon/${thirdEvolutionName}/`;

    axios
      .get(thirdEvolutionUrl)
      .then((res) => {
        console.log('get thi res', res);
        setThirdEvolutionData(res.data);
      })
      .catch((err) => {
        const error = new Error(err);
        console.log('get thi res', error);
      });
  };

  useEffect(() => {
    if (!pokemonName) return;

    fetchPokemonData();
    fetchPokemonSpeciesData();
    fetchEvolutionaryChainData();
  }, []);

  useEffect(() => {
    if (!evolutionaryChainData) return;

    fetchSecondEvolutionData();
    fetchThirdEvolutionData();
  }, [evolutionaryChainData]);

  return (
    <>
      <div style={leftSideStyle}>
        <NavBar />
        <div>Evolutionary Chain</div>
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

export default EvolutionaryChainPage;
