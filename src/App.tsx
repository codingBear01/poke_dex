import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage, PokemonInfoPage } from './Pages';
import { PokemonDataProps } from './store/interfaces';

function App() {
  const [pokemonData, setPokemonData] =
    useState<PokemonDataProps['pokemonData']>(null);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route
        path="/pokemon-info"
        element={
          <PokemonInfoPage
            setPokemonData={setPokemonData}
            pokemonData={pokemonData}
          />
        }
      />
    </Routes>
  );
}

export default App;
