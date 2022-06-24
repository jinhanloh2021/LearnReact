import React, { useContext } from 'react';
import './HeaderCartButton.scss';
import CartIcon from '../cart/CartIcon';
import CartContext from '../../store/cart-context';

type Props = {
  onClick: () => void;
};

export default function HeaderCartButton({ onClick }: Props) {
  const cartContext = useContext(CartContext); //component re-rendered whenever context changes.

  //Sums all item.amount to get total numCartItems. Displays on the header.
  const numCartItems = cartContext.items.reduce((currentNum, item) => {
    return currentNum + (item.amount || 0); //item can be undefined
  }, 0);

  return (
    <button className="button" onClick={onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{numCartItems}</span>
    </button>
  );
}
