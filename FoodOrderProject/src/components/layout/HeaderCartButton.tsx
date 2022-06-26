import React, { useContext } from 'react';
import './HeaderCartButton.scss';
import CartIcon from '../cart/CartIcon';
import CartContext from '../../store/cart-context';

type Props = {
  onClick: () => void;
};

export default function HeaderCartButton({ onClick }: Props) {
  const cartContext = useContext(CartContext); //component re-rendered whenever context changes.

  //Iterates through Item[], sums up all amounts.
  const numCartItems: number = cartContext.items.reduce((currentNum, item) => {
    return currentNum + (item.amount || 0); //item can be undefined
  }, 0);

  return (
    <button className="header-cart-button" onClick={onClick}>
      <span className="header-icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="header-badge">{numCartItems}</span>
    </button>
  );
}
