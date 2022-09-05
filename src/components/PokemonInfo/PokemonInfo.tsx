import React from 'react';
import { PokemonDataProps } from '../../inferfaces';

const PokemonInfo = ({ pokemonData }: PokemonDataProps) => {
  const name = pokemonData.name;
  const abilities = pokemonData.abilities;
  const baseExperience = pokemonData.base_experience;
  const forms = pokemonData.forms;
  const gameIndices = pokemonData.game_indices;
  const height = pokemonData.height;

  return (
    <>
      {pokemonData && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            margin: '0 auto',
          }}
        >
          <div>name: {name}</div>
          <div>
            abilities:
            {abilities.map((ability, i) => (
              <div key={ability.ability.name}>{ability.ability.name}</div>
            ))}
          </div>
          <div>base experience: {baseExperience}</div>
          <div>
            forms:
            {forms.map((form, i) => (
              <div key={form.name}>{form.name}</div>
            ))}
          </div>
          <div>
            game indices:
            {gameIndices.map((gameIndex, i) => (
              <div key={gameIndex.version.name}>
                <span>{gameIndex.game_index}</span>
                <span>{gameIndex.version.name}</span>
              </div>
            ))}
          </div>
          <div>height: {height}</div>
        </div>
      )}
    </>
  );
};

export default PokemonInfo;
