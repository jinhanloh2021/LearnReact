import React, { useContext } from 'react';
import './mealItem.scss';
import MealItemForm from './MealItemForm';
import { Meal } from '../AvailableMeals';
import CartContext from '../../../store/cart-context';

export default function MealItem({ id, name, description, price, key }: Meal) {
  const cartContext = useContext(CartContext); //get the cart state, and use function.
  const addToCartHandler = (amount: number) => {
    cartContext.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  const formattedPrice: string = `$${price.toFixed(2)}`;
  return (
    <li className="meal-item" key={key}>
      <div>
        <h3>{name}</h3>
        <div className="description">{description}</div>
        <div className="meal-item-price">{formattedPrice}</div>
      </div>
      <div className="meal-item-form-div">
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}
