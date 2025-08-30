import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { usePizzas } from "../context/PizzasContext";

export default function Home() {
  const { addToCart } = useCart();
  const { pizzas } = usePizzas();

  return (
    <div className="home">
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
        Bienvenido a Mamma Mía <span role="img" aria-label="pizza">🍕</span>
      </h1>

      <div
        className="pizza-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          padding: "2rem",
        }}
      >
        {pizzas.map((pizza) => (
          <div
            key={pizza.nombre}
            className="pizza-card"
            style={{
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              borderRadius: "10px",
              overflow: "hidden",
              background: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <img
              src={pizza.imagen}
              alt={`Pizza ${pizza.nombre}`}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/250x180?text=Sin+Imagen";
              }}
            />
            <div style={{ padding: "1rem" }}>
              <h3>{pizza.nombre}</h3>
              <p>Ingredientes: {pizza.ingredientes.join(", ")}</p>
              <strong>${Number(pizza.precio).toLocaleString()}</strong>
            </div>

            <div style={{ display: "flex", gap: 8, padding: "0 1rem 1rem" }}>
              <Link
                to={`/pizza/${encodeURIComponent(pizza.nombre)}`}
                className="btn btn-outline-primary"
              >
                Ver más
              </Link>
              <button
                onClick={() => addToCart(pizza)}
                className="btn btn-success"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
