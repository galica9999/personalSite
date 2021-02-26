import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//components imported
import Pane from './components/Pane';

//imported styles

import './styles/App.scss';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Pane />
      </BrowserRouter>
    </div>
  );
}

export default App;
