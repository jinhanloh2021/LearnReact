import React from 'react';
import Input from './Input';
import nameValidator from './nameValidator';
import emailValidator from './emailValidator';
import useInput from '../../Hooks/useInput';

const SimpleInput = () => {
  const {
    enteredValue: enteredName,
    resetInput: resetName,
    enteredValueIsValid: enteredNameIsValid,
    valueRenderError: nameRenderError,
    valueInputChangeHandler: nameInputChangeHandler,
    valueInputBlurHandler: nameInputBlurHandler,
  } = useInput(nameValidator);

  const {
    enteredValue: enteredEmail,
    resetInput: resetEmail,
    enteredValueIsValid: enteredEmailIsValid,
    valueRenderError: emailRenderError,
    valueInputChangeHandler: emailInputChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
  } = useInput(emailValidator);

  //overall formValidState
  const formValid = enteredNameIsValid && enteredEmailIsValid;

  const formSubmissionHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formValid) {
      return;
    }
    console.log(`Name: ${enteredName}\nEmail: ${enteredEmail}`); //using state gets value on every keystroke

    resetName();
    resetEmail();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <Input
        enteredValue={enteredName}
        valueInputChangeHandler={nameInputChangeHandler}
        valueInputBlurHandler={nameInputBlurHandler}
        valueRenderError={nameRenderError}
        label="Name"
        errMessage="Name cannot be empty."
      />
      <Input
        enteredValue={enteredEmail}
        valueInputChangeHandler={emailInputChangeHandler}
        valueInputBlurHandler={emailInputBlurHandler}
        valueRenderError={emailRenderError}
        label="Email"
        errMessage="Invalid Email."
      />
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
