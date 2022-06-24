import React from 'react';
import './mealItem.scss';
import MealItemForm from './MealItemForm';
import { Meal } from '../AvailableMeals';

export default function MealItem({ id, name, description, price }: Meal) {
  const formattedPrice = `$${price.toFixed(2)}`;
  return (
    <li className="meal">
      <div>
        <h3>{name}</h3>
        <div className="description">{description}</div>
        <div className="price">{formattedPrice}</div>
      </div>
      <div className="meal-item-form-div">
        <MealItemForm id={id} />
      </div>
    </li>
  );
}
