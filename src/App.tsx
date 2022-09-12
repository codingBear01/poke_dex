import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage, PokemonInfoPage, PokemonMovesPage } from './Pages';
import { PokemonPageProps } from './store/interfaces';

function App() {
  const [pokemonData, setPokemonData] =
    useState<PokemonPageProps['pokemonData']>(null);
  const [speciesData, setSpeciesData] =
    useState<PokemonPageProps['speciesData']>(null);

  const moves = pokemonData?.moves;

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
