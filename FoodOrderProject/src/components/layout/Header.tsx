import React from 'react';
import './Header.scss';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

type Props = {
  onShowCart: ()=> void;
};

export default function Header({onShowCart}: Props) {
  return (
    <>
      <header className="header">
        <h1>React Meals</h1>
        <HeaderCartButton onClick={onShowCart}/>
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="A table of food" />
      </div>
    </>
  );
}
