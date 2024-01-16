import React from 'react';
import Card from './Card';

const CardList = ({ datos }) => {
  return (
    <div className="card-list">
      {datos.map((item) => (
        <Card
          key={item.id}
          titulo={item.titulo}
          descripcion={item.descripcion}
          imagen={item.imagen}
        />
      ))}
    </div>
  );
};

export default CardList;
