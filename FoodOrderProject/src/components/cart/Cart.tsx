import React, { useContext } from 'react';
import './cart.scss';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import { Item } from '../../store/cart-context';

type Props = {
  onCloseCart: () => void;
};

export default function Cart({ onCloseCart }: Props): JSX.Element {
  const cartContext = useContext(CartContext);

  //Get total price
  let totalPrice: number = 0;
  cartContext.items.forEach((item) => (totalPrice += item.amount * item.price)); //iterate through, multiply amount by price.
  totalPrice = +totalPrice.toFixed(2);

  const onAddHandler = (item: Item): void => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const onRemoveHandler = (id: string, amount: number): void => {
    cartContext.removeItem(id, amount);
  };

  const cartItems: JSX.Element = (
    <ul className="cart-items">
      {cartContext.items.map((item) => (
        <CartItem item={item} onAdd={onAddHandler} onRemove={onRemoveHandler} />
      ))}
    </ul>
  );

  return (
    <Modal onCloseCart={onCloseCart}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>{`$${totalPrice}`}</span>
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
