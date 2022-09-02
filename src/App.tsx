import React from 'react';
import { MainSearchBox } from './components';
import * as C from './components/MainSearchBox/style';

function App() {
  return (
    <div className="App" style={C.AppStyle}>
      <MainSearchBox />
    </div>
  );
}

export default App;
