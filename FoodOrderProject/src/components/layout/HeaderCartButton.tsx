import React from 'react';
import './HeaderCartButton.scss';
import CartIcon from '../cart/CartIcon';

type Props = {
  onClick: () => void;
};

export default function HeaderCartButton({ onClick }: Props) {
  return (
    <button className="button" onClick={onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">$3</span>
    </button>
  );
}
