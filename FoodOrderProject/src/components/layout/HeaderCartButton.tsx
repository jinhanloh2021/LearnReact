import React, { useContext, useEffect, useState } from 'react';
import './HeaderCartButton.scss';
import CartIcon from '../cart/CartIcon';
import CartContext from '../../store/cart-context';

type Props = {
  onClick: () => void;
};

export default function HeaderCartButton({ onClick }: Props) {
  const cartContext = useContext(CartContext); //component re-rendered whenever context changes.
  const [btnAnimate, setBtnAnimate] = useState(false);

  //Iterates through Item[], sums up all amounts.
  const numCartItems: number = cartContext.items.reduce((currentNum, item) => {
    return currentNum + (item.amount || 0); //item can be undefined
  }, 0);

  //By using useEffect, React will do something after rendering.
  let buttonClassName = `header-cart-button ${btnAnimate ? 'bump' : ''}`;
  useEffect(() => {
    if (cartContext.totalAmount === 0) {
      return;
    }
    setBtnAnimate(true);
    const timer = setTimeout(() => {
      setBtnAnimate(false);
    }, 300);

    //return cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.totalAmount]);

  return (
    <button className={buttonClassName} onClick={onClick}>
      <span className="header-icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="header-badge">{numCartItems}</span>
    </button>
  );
}
