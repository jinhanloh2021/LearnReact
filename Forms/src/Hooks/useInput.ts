import { useState } from 'react';

export default function useInput(validator: (enteredValue: string) => boolean) {
  const [enteredValue, setEnteredValue] = useState('');
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);

  //derived states
  const enteredValueIsValid = validator(enteredValue); //derived state
  const valueRenderError = !enteredValueIsValid && enteredValueTouched;

  //Handler functions
  const valueInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(e.target.value);
  };
  const valueInputBlurHandler = (
    e: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    setEnteredValueTouched(true);
  };

  function resetInput():void {
    setEnteredValue('');
    setEnteredValueTouched(false);
  }

  return {
    enteredValue,
    resetInput,
    enteredValueIsValid,
    valueRenderError,
    valueInputChangeHandler,
    valueInputBlurHandler,
  };
}
