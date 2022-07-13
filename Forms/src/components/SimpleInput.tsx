import React from 'react';
import NameInput from './NameInput';
import EmailInput from './EmailInput';
import nameValidator from './nameValidator';
import emailValidator from './emailValidator';
import useInput from '../Hooks/useInput';

const SimpleInput = () => {
  const {
    enteredValue: enteredName,
    setEnteredValue: setEnteredName,
    setEnteredValueTouched: setEnteredNameTouched,
    enteredValueIsValid: enteredNameIsValid,
    valueRenderError: nameRenderError,
    valueInputChangeHandler: nameInputChangeHandler,
    valueInputBlurHandler: nameInputBlurHandler,
  } = useInput(nameValidator);

  const {
    enteredValue: enteredEmail,
    setEnteredValue: setEnteredEmail,
    setEnteredValueTouched: setEnteredEmailTouched,
    enteredValueIsValid: enteredEmailIsValid,
    valueRenderError: emailRenderError,
    valueInputChangeHandler: emailInputChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
  } = useInput(emailValidator);

  //overall formValidState
  const formValid = enteredNameIsValid && enteredEmailIsValid; // && enteredAgeIsValid && ...

  const formSubmissionHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnteredNameTouched(true);
    if (!formValid) {
      return;
    }
    console.log(`Name: ${enteredName}\nEmail: ${enteredEmail}`); //using state gets value on every keystroke

    setEnteredName('');
    setEnteredNameTouched(false);
    setEnteredEmail('');
    setEnteredEmailTouched(false);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <NameInput
        enteredName={enteredName}
        nameInputChangeHandler={nameInputChangeHandler}
        nameInputBlurHandler={nameInputBlurHandler}
        nameRenderError={nameRenderError}
      />
      <EmailInput
        enteredEmail={enteredEmail}
        emailInputChangeHandler={emailInputChangeHandler}
        emailInputBlurHandler={emailInputBlurHandler}
        emailRenderError={emailRenderError}
      />
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
