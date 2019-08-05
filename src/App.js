import React from 'react';
import GlobaStyle from './services/global_style'
import { loadLists } from './services/api'


import Header from './components/Header'
import Board from './components/Board'

function App() {
  return (
    <>
      <GlobaStyle />

      <Header />
      <Board data={loadLists()} />
    </>
  );
}

export default App;
