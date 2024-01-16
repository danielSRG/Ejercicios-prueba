import React, { useState } from 'react';

const ListaElementos = () => {
  // Estado para almacenar la lista de elementos
  const [elementos, setElementos] = useState([
    { id: 1, nombre: 'Elemento 1' },
    { id: 2, nombre: 'Elemento 2' },
    { id: 3, nombre: 'Elemento 3' },
  ]);

  // Manejador de eventos para eliminar un elemento
  const eliminarElemento = (id) => {
    // Filtrar la lista para eliminar el elemento con el ID dado
    const nuevaLista = elementos.filter((elemento) => elemento.id !== id);
    // Actualizar el estado con la nueva lista
    setElementos(nuevaLista);
  };

  return (
    <div>
      <h2>Lista de Elementos</h2>
      <ul>
        {elementos.map((elemento) => (
          <li key={elemento.id}>
            {elemento.nombre}{' '}
            <button onClick={() => eliminarElemento(elemento.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaElementos;
