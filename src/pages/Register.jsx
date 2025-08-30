import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function Register() {
  const { register } = useUser();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await register(email, password);
    if (res.token) {
      navigate("/profile");
    } else {
      alert("Error en el registro");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-group" style={{ maxWidth: 420, margin: "0 auto" }}>
      <h2 className="mb-3 text-center">Registrarse</h2>
      <div className="mb-3">
        <label className="form-label">Correo</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Contraseña</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-success w-100">Registrarse</button>
    </form>
  );
}
