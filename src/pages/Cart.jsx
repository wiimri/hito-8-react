import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

export default function Cart() {
  const { items, increment, decrement, removeFromCart, clearCart, total } = useCart();
  const { token } = useUser();

  const checkout = async () => {
    const res = await fetch("http://localhost:5000/api/checkouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ cart: items }),
    });

    if (res.ok) {
      alert("Compra realizada con éxito ✅");
      clearCart();
    } else {
      alert("Error en la compra");
    }
  };

  if (!items.length) {
    return (
      <div className="container py-4">
        <h2 className="mb-3">Carrito</h2>
        <p>Tu carrito está vacío.</p>
        <Link to="/" className="btn btn-primary mt-2">Ir a comprar</Link>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2 className="mb-3">Carrito</h2>

      {/* listado de items */}
      <div className="list-group mb-3">
        {items.map((item) => (
          <div key={item.nombre} className="list-group-item d-flex align-items-center gap-3">
            <img src={item.imagen} alt={item.nombre} width={64} height={64} />
            <div className="flex-grow-1">
              <div className="fw-semibold">{item.nombre}</div>
              <div className="text-muted">${item.precio.toLocaleString()}</div>
            </div>

            <div className="d-flex align-items-center gap-2">
              <button className="btn btn-outline-secondary" onClick={() => decrement(item.nombre)}>-</button>
              <span className="px-2">{item.cantidad}</span>
              <button className="btn btn-outline-secondary" onClick={() => increment(item.nombre)}>+</button>
            </div>

            <div className="ms-3 fw-semibold">
              ${(item.precio * item.cantidad).toLocaleString()}
            </div>

            <button className="btn btn-outline-danger ms-3" onClick={() => removeFromCart(item.nombre)}>
              Eliminar
            </button>
          </div>
        ))}
      </div>

      {/* total y pagar */}
      <div className="d-flex justify-content-between align-items-center gap-2">
        <button className="btn btn-outline-secondary" onClick={clearCart}>Vaciar carrito</button>
        <div className="d-flex align-items-center gap-3">
          <div className="fs-5 fw-bold">Total: ${total.toLocaleString()}</div>
          <button className="btn btn-primary" disabled={!token} onClick={checkout}>
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
}
