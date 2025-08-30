import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

export default function Navbar() {
  const navigate = useNavigate();

  const cart = useCart() || {};
  const count = cart.count ?? 0;
  const total = cart.total ?? 0;

  const { token, logout } = useUser();

  const handleLogout = () => {
    logout();               
    navigate("/login");     
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">Pizzería Mamma Mía</Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>

          {token && (
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Perfil</Link>
            </li>
          )}
        </ul>

        <div className="d-flex align-items-center">
          {token ? (
            <button className="btn btn-outline-light me-3" onClick={handleLogout}>
              Cerrar sesión
            </button>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-light me-2">Iniciar sesión</Link>
              <Link to="/register" className="btn btn-outline-light me-3">Registrarse</Link>
            </>
          )}

          <Link to="/cart" className="btn btn-success position-relative">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="ms-2">${Number(total).toLocaleString()}</span>
            {count > 0 && (
              <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
