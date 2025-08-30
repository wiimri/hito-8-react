import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); // 

  const addToCart = (pizza, qty = 1) => {
    setItems((prev) => {
      const exists = prev.find((p) => p.nombre === pizza.nombre);
      if (exists) {
        return prev.map((p) =>
          p.nombre === pizza.nombre ? { ...p, cantidad: p.cantidad + qty } : p
        );
      }
      return [
        ...prev,
        {
          nombre: pizza.nombre ?? pizza.name,
          precio: pizza.precio ?? pizza.price,
          imagen: pizza.imagen ?? pizza.img,
          cantidad: qty,
        },
      ];
    });
  };

  const increment = (nombre) =>
    setItems((prev) =>
      prev.map((p) =>
        p.nombre === nombre ? { ...p, cantidad: p.cantidad + 1 } : p
      )
    );

  const decrement = (nombre) =>
    setItems((prev) =>
      prev
        .map((p) =>
          p.nombre === nombre ? { ...p, cantidad: Math.max(0, p.cantidad - 1) } : p
        )
        .filter((p) => p.cantidad > 0)
    );

  const removeFromCart = (nombre) =>
    setItems((prev) => prev.filter((p) => p.nombre !== nombre));

  const clearCart = () => setItems([]);

  const total = useMemo(
    () => items.reduce((acc, p) => acc + (p.precio * p.cantidad), 0),
    [items]
  );
  const count = useMemo(
    () => items.reduce((acc, p) => acc + p.cantidad, 0),
    [items]
  );

  const value = {
    items,
    addToCart,
    increment,
    decrement,
    removeFromCart,
    clearCart,
    total,
    count,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
