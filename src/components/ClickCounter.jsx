import React, { useState } from 'react';
import { ContadorContext } from './ContadorContext';

const ClickCounter = () => {
    const {contador, setContador} = React.useContext(ContadorContext);
  return (
    <div>
      <h2>Contador de Clicks : {contador}</h2>
      <button onClick={() => setContador(0)}>Reiniciar</button>
    </div>
  );
};

export default ClickCounter;
