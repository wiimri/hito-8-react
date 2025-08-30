import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function Profile() {
  const navigate = useNavigate();
  const { email, token, getProfile, logout } = useUser();
  const [loading, setLoading] = useState(true);
  const [serverEmail, setServerEmail] = useState(email || "");

  useEffect(() => {
    let isMounted = true;

    const fetchMe = async () => {
      try {
        if (!token) {
          navigate("/login", { replace: true });
          return;
        }
        const me = await getProfile(); 
        if (isMounted && me?.email) setServerEmail(me.email);
      } catch {
        handleLogout();
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchMe();
    return () => { isMounted = false; };
  }, [token]);

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  if (loading) {
    return (
      <div className="container py-4">
        <h2 className="mb-3">Perfil</h2>
        <p>Cargando perfil…</p>
      </div>
    );
  }

  return (
    <div className="container py-4" style={{ maxWidth: 640 }}>
      <h2 className="mb-3">Perfil</h2>

      <div className="card shadow-sm">
        <div className="card-body d-grid gap-2">
          <div>
            <span className="text-muted d-block">Usuario autenticado</span>
            <strong>{serverEmail || email || "—"}</strong>
          </div>

          <div className="d-flex gap-2 mt-2">
            <button className="btn btn-outline-primary"
                    onClick={async () => {
                      try {
                        const me = await getProfile();
                        alert(`Perfil OK: ${me?.email ?? "sin email"}`);
                      } catch {
                        alert("No se pudo validar el perfil");
                      }
                    }}>
              Validar perfil
            </button>

            <button className="btn btn-danger ms-auto" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </div>

          <small className="text-muted mt-2">
            Estado del token: {token ? "activo" : "no activo"}
          </small>
        </div>
      </div>
    </div>
  );
}
