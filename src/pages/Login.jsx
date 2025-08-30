import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(email, password);
    if (res.token) {
      navigate("/profile");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="fullpage-auth">
      <div className="auth-card" style={{ maxWidth: 420 }}>
        <h2 className="mb-3 text-center">Iniciar sesión</h2>

        <form onSubmit={handleSubmit} className="d-grid gap-3">
          <div>
            <label className="form-label">Correo</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Entrar
          </button>

          <div className="text-center">
            <small>
              ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
}
