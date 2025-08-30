import React from "react";

const pizzaList = [
  {
    id: 1,
    nombre: "Pizza Hawaiana",
    precio: 8500,
    ingredientes: ["Jamón", "Piña", "Queso mozzarella", "Salsa de tomate"],
    imagen: "/assets/img/pizzahawaiana.png"
  },
  {
    id: 2,
    nombre: "Pizza Pepperoni",
    precio: 9000,
    ingredientes: ["Pepperoni", "Queso mozzarella", "Salsa de tomate"],
    imagen: "/assets/img/pizzapeperoni.png"
  },
  {
    id: 3,
    nombre: "Pizza Margarita",
    precio: 7500,
    ingredientes: ["Queso mozzarella", "Tomate", "Albahaca"],
    imagen: "/assets/img/pizzamargarita.png"
  },
  {
    id: 4,
    nombre: "Pizza Cuatro Quesos",
    precio: 9500,
    ingredientes: ["Queso mozzarella", "Queso azul", "Parmesano", "Queso de cabra"],
    imagen: "/assets/img/pizzacuatroquesos.png"
  },
  {
    id: 5,
    nombre: "Pizza Vegetariana",
    precio: 8000,
    ingredientes: ["Pimiento", "Champiñones", "Aceitunas", "Cebolla", "Queso"],
    imagen: "/assets/img/pizzavegetariana.png"
  },
  {
    id: 6,
    nombre: "Pizza Napolitana",
    precio: 8900,
    ingredientes: ["Tomate", "Ajo", "Anchoas", "Albahaca", "Aceite de oliva"],
    imagen: "/assets/img/pizzanapolitana.png"
  }
];

function Home({ cart, setCart }) {
  const addToCart = (pizza) => {
    const exists = cart.find((item) => item.id === pizza.id);
    if (exists) {
      const updated = cart.map((item) =>
        item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...pizza, quantity: 1 }]);
    }
  };

  return (
    <div className="home-container p-4">
      <h1 className="mb-4 text-center">Bienvenido a Mamma Mía 🍕</h1>
      <div className="row">
        {pizzaList.map((pizza) => (
          <div className="col-md-4 mb-4" key={pizza.id}>
            <div className="card h-100 shadow">
              <img src={pizza.imagen} className="card-img-top" alt={pizza.nombre} />
              <div className="card-body">
                <h5 className="card-title">{pizza.nombre}</h5>
                <p className="card-text">
                  Ingredientes: {pizza.ingredientes.join(", ")}
                </p>
                <p className="fw-bold">${pizza.precio.toLocaleString()}</p>
                <button
                  className="btn btn-warning w-100"
                  onClick={() => addToCart(pizza)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
