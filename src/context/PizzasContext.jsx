import { createContext, useContext, useMemo } from "react";
import pizzasData from "../data/pizzas";

const PizzasContext = createContext(null);

export function PizzasProvider({ children }) {
  const pizzas = pizzasData;

  const getByNombre = (nombre) =>
    pizzas.find(
      (p) => String(p.nombre).toLowerCase() === String(nombre).toLowerCase()
    );

  const value = useMemo(() => ({ pizzas, getByNombre }), [pizzas]);

  return (
    <PizzasContext.Provider value={value}>{children}</PizzasContext.Provider>
  );
}

export const usePizzas = () => {
  const ctx = useContext(PizzasContext);
  if (!ctx) throw new Error("usePizzas debe usarse dentro de <PizzasProvider>");
  return ctx;
};
