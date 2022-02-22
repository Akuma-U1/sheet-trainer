import React from 'react';
import './App.css';
import { Stave } from './components/sheet-music/Stave';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Stave spacing={25} width={1000} />
      </header>
    </div>
  );
}

export default App;
