import React from 'react';

const CardPizza = ({ nombre, precio, ingredientes, imagen, onAdd }) => {
  return (
    <div className="card pizza-card">
      <img src={imagen} alt={`Pizza ${nombre}`} />
      <h2>{nombre}</h2>
      <p><strong>Precio:</strong> ${precio}</p>
      <ul>
        {ingredientes.map((ing, idx) => (
          <li key={idx}>{ing}</li>
        ))}
      </ul>
      <button
        type="button"
        className="btn btn-sm btn-success mt-2"
        onClick={onAdd}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default CardPizza;
