import React from 'react';
import MealSummary from './MealSummary';
import AvailableMeals from './AvailableMeals';

type Props = {};

export default function Meals({}: Props) {
  return (
    <>
      <MealSummary />
      <AvailableMeals />
    </>
  );
}