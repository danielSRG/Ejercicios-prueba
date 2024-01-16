import React from 'react';
import CardList from './CardList';

const datosEjemplo = [
  {
    id: 1,
    titulo: 'Iphone 15',
    descripcion: 'Apple iPhone 15 Pro fue el 22 de septiembre de 2023',
    imagen: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846357018',
  },
  {
    id: 2,
    titulo: 'Computador HP',
    descripcion: 'Increible computador a la venta, no te lo pierda!',
    imagen: 'https://www.alkosto.com/medias/196548629831-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxOTY0OTR8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZzRNUzlvTURNdk1USTNNamt6T1Rjek56a3hNREl1YW5Cbnw0NDhmMWVjODYyOWZjODNiYTU0MDVkMzc3MTI2NzdjMmZmNzk0YjIzNzFkMjllY2E2ZTUxOTRmZDEyZTk5NzBi',
  },
  {
    id: 3,
    titulo: 'Paisaje',
    descripcion: 'Hermoso paisaje en EE.UU',
    imagen: 'https://definicion.de/wp-content/uploads/2009/12/paisaje-1.jpg',
  },
];

function App() {
  return (
    <div className="App">
      <h1>Mi Lista de Artículos</h1>
      <CardList datos={datosEjemplo} />
    </div>
  );
}

export default App;
