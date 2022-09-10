import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { MainPage, PokemonInfoPage } from './Pages';

function App() {
  const [pokemonData, setPokemonData] = useState<{
    abilities: [
      {
        ability: {
          name: string;
          url: string;
        };
        is_hidden: boolean;
        slot: number;
      }
    ];
    height: number;
    held_items: [
      {
        item: {
          name: string;
          url: string;
        };
        version_details: [
          {
            rarity: number;
            version: {
              name: string;
              url: string;
            };
          }
        ];
      }
    ];
    id: number;
    location_area_encounters: string;
    name: string;
    moves: [
      {
        move: {
          name: string;
          url: string;
        };
        version_group_details: [
          {
            level_learned_at: number;
            move_learn_method: {
              name: string;
              url: string;
            };
            version_group: {
              name: string;
              url: string;
            };
          }
        ];
      }
    ];
    sprites: {
      back_default: string;
      back_female: string | null;
      back_shiny: string;
      back_shiny_female: string | null;
      front_default: string;
      front_female: string | null;
      front_shiny: string;
      front_shiny_female: string | null;
      other: {
        'official-artwork': {
          front_default: string;
        };
      };
      versions: {
        'generation-i': {
          'red-blue': {
            back_default: string;
            back_gray: string;
            back_transparent: string;
            front_default: string;
            front_gray: string;
            front_transparent: string;
          };
          yellow: {
            back_default: string;
            back_gray: string;
            back_transparent: string;
            front_default: string;
            front_gray: string;
            front_transparent: string;
          };
        };
        'generation-ii': {
          crystal: {
            back_default: string;
            back_shiny: string;
            back_shiny_transparent: string;
            back_transparent: string;
            front_default: string;
            front_shiny: string;
            front_shiny_transparent: string;
            front_transparent: string;
          };
          gold: {
            back_default: string;
            back_shiny: string;
            front_default: string;
            front_shiny: string;
            front_transparent: string;
          };
          silver: {
            back_default: string;
            back_shiny: string;
            front_default: string;
            front_shiny: string;
            front_transparent: string;
          };
        };
        'generation-iii': {
          emerald: {
            front_default: string;
            front_shiny: string;
          };
          'firered-leafgreen': {
            back_default: string;
            back_shiny: string;
            front_default: string;
            front_shiny: string;
          };
          'ruby-sapphire': {
            back_default: string;
            back_shiny: string;
            front_default: string;
            front_shiny: string;
          };
        };
        'generation-iv': {
          'diamond-pearl': {
            back_default: string;
            back_female: string | null;
            back_shiny: string;
            back_shiny_female: string | null;
            front_default: string;
            front_female: string | null;
            front_shiny: string;
            front_shiny_female: string | null;
          };
          'heartgold-soulsilver': {
            back_default: string;
            back_female: string | null;
            back_shiny: string;
            back_shiny_female: string | null;
            front_default: string;
            front_female: string | null;
            front_shiny: string;
            front_shiny_female: string | null;
          };
          platinum: {
            back_default: string;
            back_female: string | null;
            back_shiny: string;
            back_shiny_female: string | null;
            front_default: string;
            front_female: string | null;
            front_shiny: string;
            front_shiny_female: string | null;
          };
        };
        'generation-v': {
          'black-white': {
            animated: {
              back_default: string;
              back_female: string | null;
              back_shiny: string;
              back_shiny_female: string | null;
              front_default: string;
              front_female: string | null;
              front_shiny: string;
              front_shiny_female: string | null;
            };
            back_default: string;
            back_female: string | null;
            back_shiny: string;
            back_shiny_female: string | null;
            front_default: string;
            front_female: string | null;
            front_shiny: string;
            front_shiny_female: string | null;
          };
        };
        'generation-vi': {
          'omegaruby-alphasapphire': {
            front_default: string;
            front_female: string | null;
            front_shiny: string;
            front_shiny_female: string | null;
          };
          'x-y': {
            front_default: string;
            front_female: string | null;
            front_shiny: string;
            front_shiny_female: string | null;
          };
        };
        'generation-vii': {
          icons: {
            front_default: string;
            front_female: string | null;
          };
          'ultra-sun-ultra-moon': {
            front_default: string;
            front_female: string | null;
            front_shiny: string;
            front_shiny_female: string | null;
          };
        };
        'generation-viii': {
          icons: {
            front_default: string;
            front_female: string | null;
          };
        };
      };
    };
    stats: [
      {
        base_stat: number;
        effort: number;
        stat: {
          name: string;
          url: string;
        };
      }
    ];
    types: [
      {
        slot: number;
        type: {
          name: string;
          url: string;
        };
      }
    ];
    weight: number;
  } | null>(null);
  const [pokemonName, setPokemonName] = useState<string | null>('');

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainPage
            setPokemonData={setPokemonData}
            setPokemonName={setPokemonName}
            pokemonName={pokemonName}
          />
        }
      />
      <Route
        path="/pokemon-info"
        element={
          <PokemonInfoPage
            pokemonData={pokemonData}
            pokemonName={pokemonName}
          />
        }
      />
    </Routes>
  );
}

export default App;
