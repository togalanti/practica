import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Products from './components/Products';
import ClickCounter from './components/ClickCounter';
import { ContadorProvider } from './components/ContadorContext';

function App() {

  return (
    <div className="App">
      <ContadorProvider>
        <Products />
        <ClickCounter />
      </ContadorProvider>
    </div>
  );
}

export default App;
