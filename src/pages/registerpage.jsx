import React from "react";
import Register from "./Register"; 
import { Link } from "react-router-dom";
import './PageStyles.css';

const RegisterPage = () => {
  return (
    <div className="fullpage-auth">
      <div className="auth-card">
        <h2 className="text-center">Registro de Usuario</h2>
        <Register />
        <p className="text-center mt-3">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
