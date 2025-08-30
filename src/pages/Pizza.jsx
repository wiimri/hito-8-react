import { useParams, useNavigate } from "react-router-dom";
import pizzas from "../data/pizzas";
import './PageStyles.css';

const Pizza = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const pizzaIndex = parseInt(id?.replace("p", "")) - 1;
  const pizza = pizzas[pizzaIndex];

  if (!pizza) {
    return (
      <div className="fullpage-auth">
        <div className="auth-card text-center">
          <h2>Pizza no encontrada</h2>
          <button className="btn btn-dark mt-3" onClick={() => navigate("/")}>
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fullpage-auth">
      <div className="auth-card text-center">
        <h2 className="mb-3">{pizza.nombre}</h2>
        <img
          src={pizza.imagen}
          alt={pizza.nombre}
          className="img-fluid rounded mb-3"
          style={{ maxWidth: "300px" }}
        />
        <p><strong>Precio:</strong> ${pizza.precio}</p>
        <h5 className="mt-3">Ingredientes:</h5>
        <ul className="list-unstyled">
          {pizza.ingredientes.map((ing, idx) => (
            <li key={idx}>🍕 {ing}</li>
          ))}
        </ul>
        <button className="btn btn-primary mt-4" onClick={() => navigate("/")}>
          Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default Pizza;
