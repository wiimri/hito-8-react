import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PageStyles.css";

export default function PizzaDetails() {
  const { id } = useParams();             
  const navigate = useNavigate();

  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadPizza() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch("/pizzas.json");
        if (!res.ok) throw new Error("No se pudo leer pizzas.json");
        const list = await res.json();

        const parsedId = Number.isNaN(Number(id)) ? id : Number(id);
        const found = list.find(
          (p) => p.id === parsedId || String(p.id) === String(id)
        );

        if (!found) throw new Error("Pizza no encontrada");
        if (isMounted) setPizza(found);
      } catch (err) {
        if (isMounted) setError(err.message || "Error cargando la pizza");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadPizza();
    return () => { isMounted = false; };
  }, [id]);

  if (loading) {
    return (
      <div className="fullpage-auth">
        <div className="auth-card text-center">Cargando pizza…</div>
      </div>
    );
  }

  if (error || !pizza) {
    return (
      <div className="fullpage-auth">
        <div className="auth-card text-center">
          <h2>{error || "Pizza no encontrada"}</h2>
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
          onError={(e) => { e.currentTarget.src = "https://placehold.co/300x200?text=🍕"; }}
        />

        <p>
          <strong>Precio:</strong>{" "}
          ${pizza.precio?.toLocaleString?.() ?? pizza.precio}
        </p>

        <h5 className="mt-3">Ingredientes:</h5>
        <ul className="list-unstyled">
          {pizza.ingredientes?.map?.((ing, idx) => (
            <li key={idx}>🍕 {ing}</li>
          ))}
        </ul>

        <button className="btn btn-primary mt-4" onClick={() => navigate("/")}>
          Volver al inicio
        </button>
      </div>
    </div>
  );
}
