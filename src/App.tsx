import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage, PokemonInfoPage } from './Pages';
import { PokemonInfoPageProps } from './store/interfaces';

function App() {
  const [pokemonData, setPokemonData] =
    useState<PokemonInfoPageProps['pokemonData']>(null);
  const [speciesData, setSpeciesData] =
    useState<PokemonInfoPageProps['speciesData']>(null);

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
    </Routes>
  );
}

export default App;
