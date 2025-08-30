import { useState } from "react";
import './PageStyles.css';

const PerfilPage = () => {
  const [formData, setFormData] = useState({
    nombre: "Williams",
    apellido: "Arias",
    direccion: "Av. Principal #123",
    contacto: "+56 9 1234 5678",
    correo: "williams.arias.q@gmail.com",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("Datos guardados correctamente ✅");
  };

  return (
    <div className="fullpage-auth">
      <div className="auth-card">
        <h2 className="text-center mb-4">Perfil del Usuario</h2>
        <form onSubmit={handleSave}>
          <input
            type="text"
            className="form-control mb-3"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre"
          />
          <input
            type="text"
            className="form-control mb-3"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            placeholder="Apellido"
          />
          <input
            type="text"
            className="form-control mb-3"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            placeholder="Dirección"
          />
          <input
            type="text"
            className="form-control mb-3"
            name="contacto"
            value={formData.contacto}
            onChange={handleChange}
            placeholder="Número de contacto"
          />
          <input
            type="email"
            className="form-control mb-4"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="Correo electrónico"
          />
          <button type="submit" className="btn btn-primary w-100">
            Guardar cambios
          </button>
        </form>
      </div>
    </div>
  );
};

export default PerfilPage;
