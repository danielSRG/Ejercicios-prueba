import React from 'react';
import './Card.css'; // Importar el archivo de estilos

const Card = (props) => {
  const { titulo, descripcion, imagen } = props;

  return (
    <div className="card">
      <img src={imagen} alt={titulo} />
      <div className="card-content">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
      </div>
    </div>
  );
};

export default Card;
