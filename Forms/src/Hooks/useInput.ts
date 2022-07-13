import { useReducer } from 'react';

type state = {
  enteredValue: string,
  enteredValueTouched: boolean,
  enteredValueIsValid: boolean,
  valueRenderError: boolean,
}
const initialState: state = {
  enteredValue: '',
  enteredValueTouched: false,
  enteredValueIsValid: false,
  valueRenderError: false,
}
export default function useInput(validator: (enteredValue: string) => boolean) {

  function reducer(state: state, action: {type: string, payload: string}): state{
    switch(action.type){
      case 'setEnteredValue': {
        const enteredValue = action.payload;
        const enteredValueIsValid = validator(enteredValue);
        const valueRenderError = !enteredValueIsValid && state.enteredValueTouched;
        return {...state, enteredValue, enteredValueIsValid, valueRenderError};
      }

      case 'setEnteredValueTouched': {
        const enteredValueTouched = action.payload === 'true';
        const valueRenderError = !state.enteredValueIsValid && enteredValueTouched;
        return {...state, enteredValueTouched, valueRenderError};
      }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  //Handler functions
  const valueInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({type: 'setEnteredValue', payload: e.target.value});
  };
  const valueInputBlurHandler = (
    e: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    dispatch({type: 'setEnteredValueTouched', payload: 'true'});
  };

  function resetInput():void {
    dispatch({type: 'setEnteredValue', payload: ''});
    dispatch({type: 'setEnteredValueTouched', payload: 'false'});
  }

  return {
    valueState: state,
    resetInput,
    valueInputChangeHandler,
    valueInputBlurHandler,
  };
}
