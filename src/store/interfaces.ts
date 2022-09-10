export interface MainPageProps {
  setPokemonData: React.Dispatch<
    React.SetStateAction<{
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
    } | null>
  >;
  setPokemonName: React.Dispatch<React.SetStateAction<string | null>>;
  pokemonName: string | null;
}

export interface PokemonDataProps {
  pokemonName: string | null;
  pokemonData: {
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
  } | null;
}

export interface SpeciesDataProps {
  base_happiness: number | null;
  capture_rate: number | null;
  color: {
    name: string | null;
    url: string | null;
  };
  egg_groups: [
    {
      name: string | null;
      url: string | null;
    }
  ];
  evolution_chain: {
    url: string | null;
  };
  flavor_text_entries:
    | null
    | [
        {
          flavor_text: string | null;
          language: {
            name: string | null;
            url: string | null;
          };
          version: {
            name: string | null;
            url: string | null;
          };
        }
      ];
  gender_rate: number | null;
  genera:
    | null
    | [
        {
          genus: string | null;
          language: {
            name: string | null;
            url: string | null;
          };
        }
      ];
  growth_rate: {
    name: string | null;
  };
  hatch_counter: number | null;
}
