import React, { useContext } from 'react';
import './cart.scss';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import { Item } from '../../store/cart-context';

type Props = {
  onCloseCart: () => void;
};

export default function Cart({ onCloseCart }: Props): JSX.Element {
  const cartContext = useContext(CartContext); //get access to cartContext and handler functions.
  const totalAmount: string = `$${cartContext.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id: string) => {
    cartContext.removeItem(id);
  };
  const cartItemAddHandler = (item: Item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const cartItems: JSX.Element = (
    <ul className="cart-items">
      {cartContext.items.map((item) => (
        <CartItem
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          key={item.id}
          onRemove={() => cartItemRemoveHandler(item.id)}
          onAdd={() => cartItemAddHandler(item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onCloseCart={onCloseCart}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={onCloseCart}>
          Close
        </button>
        {cartContext.items.length && <button className="button">Order</button>}
      </div>
    </Modal>
  );
}
