import React from "react";
import Lottie from "lottie-react";
import dinosaurio from "../assets/lottie/dino.json";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "3rem" }}>
      <div style={{ maxWidth: "300px", margin: "0 auto" }}>
        <Lottie animationData={dinosaurio} loop={true} />
      </div>
      <h1>404 - Página no encontrada</h1>
      <p>Oops! No encontramos lo que buscas 🦖</p>
      <a href="/" className="btn btn-warning">
        Volver al inicio
      </a>
    </div>
  );
};

export default NotFound;
