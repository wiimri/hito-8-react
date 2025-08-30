import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PizzaList = ({ cart, setCart }) => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/pizzas')
      .then((res) => setPizzas(res.data))
      .catch((err) => console.error("Error al cargar pizzas:", err));
  }, []);

  const agregarAlCarrito = (pizza) => {
    const exists = cart.find((p) => p.name === pizza.name);
    if (exists) {
      const updated = cart.map((p) =>
        p.name === pizza.name ? { ...p, cantidad: p.cantidad + 1 } : p
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...pizza, cantidad: 1 }]);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">🍕 Pizzas disponibles</h1>
      <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-md-4 mb-4" key={pizza.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={pizza.img}
                alt={pizza.name}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{pizza.name}</h5>
                <p><strong>Precio:</strong> ${pizza.price}</p>
                <ul className="list-unstyled">
                  {pizza.ingredients.map((ing, i) => (
                    <li key={i}>🍕 {ing}</li>
                  ))}
                </ul>
                <button
                  className="btn btn-success mt-2"
                  onClick={() => agregarAlCarrito(pizza)}
                >
                  Agregar al carrito
                </button>
                <Link to={`/pizzas/${pizza.id}`} className="btn btn-primary mt-2">
                  Ver detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
