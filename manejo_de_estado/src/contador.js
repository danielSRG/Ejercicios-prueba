import React, { useState } from 'react';

const Contador = () => {
  // Estado del contador
  const [contador, setContador] = useState(0);

  // Función para incrementar el contador
  const incrementarContador = () => {
    setContador(contador + 1);
  };

  // Función para decrementar el contador
  const decrementarContador = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementarContador}>Incrementar</button>
      <button onClick={decrementarContador}>Decrementar</button>
    </div>
  );
};

export default Contador;
