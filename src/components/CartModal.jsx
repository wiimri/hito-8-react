import React from "react";
import "./CartModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faXmark, faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const CartModal = ({ cartItems = [], onClose, onAdd, onRemove, onDelete, onPay }) => {
  const total = cartItems.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal">
        <div className="cart-modal-header">
          <h2><FontAwesomeIcon icon={faCartShopping} /> Carrito</h2>
          <button className="close-btn" onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-cart">El carrito está vacío.</p>
        ) : (
          cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <span>{item.nombre}</span>
              <div className="cart-buttons">
                <button onClick={() => onRemove(item)}><FontAwesomeIcon icon={faMinus} /></button>
                <span>{item.cantidad}</span>
                <button onClick={() => onAdd(item)}><FontAwesomeIcon icon={faPlus} /></button>
                <button className="delete-btn" onClick={() => onDelete(item)}><FontAwesomeIcon icon={faTrash} /></button>
              </div>
            </div>
          ))
        )}

        <div className="cart-total">
          <strong>Total:</strong> ${total.toLocaleString("es-CL")}
        </div>

        <button className="pay-btn" onClick={onPay} disabled={cartItems.length === 0}>
          Pagar
        </button>
      </div>
    </div>
  );
};

export default CartModal;
