import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  EvolutionaryChainPage,
  MainPage,
  PokemonInfoPage,
  PokemonMovesPage,
} from './pages';
import { PokemonPageProps } from './store';

function App() {
  const [pokemonData, setPokemonData] =
    useState<PokemonPageProps['pokemonData']>(null);
  const [speciesData, setSpeciesData] =
    useState<PokemonPageProps['speciesData']>(null);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route
        path="/pokemon-info"
        element={
          <PokemonInfoPage
            setPokemonData={setPokemonData}
            pokemonData={pokemonData}
            setSpeciesData={setSpeciesData}
            speciesData={speciesData}
          />
        }
      />
      <Route
        path="/pokemon-evolutionary-chain"
        element={
          <EvolutionaryChainPage
            setPokemonData={setPokemonData}
            pokemonData={pokemonData}
            setSpeciesData={setSpeciesData}
            speciesData={speciesData}
          />
        }
      />
      <Route
        path="pokemon-moves"
        element={
          <PokemonMovesPage
            setPokemonData={setPokemonData}
            pokemonData={pokemonData}
            setSpeciesData={setSpeciesData}
            speciesData={speciesData}
          />
        }
      />
    </Routes>
  );
}

export default App;
