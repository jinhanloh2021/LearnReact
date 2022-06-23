import React from 'react';
import './cart.scss';
import Modal from '../UI/Modal';

type Props = {
  onCloseCart: () => void;
};

export default function Cart({ onCloseCart }: Props) {
  const cartItems = (
    <ul className="cart-items">
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onCloseCart={onCloseCart}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={onCloseCart}>
          Close
        </button>
        <button className="button">Order</button>
      </div>
    </Modal>
  );
}
