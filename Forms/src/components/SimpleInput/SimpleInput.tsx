import React from 'react';
import Input from './Input';
import nameValidator from './nameValidator';
import emailValidator from './emailValidator';
import useInput from '../../Hooks/useInput';

const SimpleInput = () => {
  const {
    valueState: nameState,
    resetInput: resetName,
    valueInputChangeHandler: nameInputChangeHandler,
    valueInputBlurHandler: nameInputBlurHandler,
  } = useInput(nameValidator);
  const nameLabel = 'Name';
  const nameErrMessage = 'Name cannot be empty.';

  const {
    valueState: emailState,
    resetInput: resetEmail,
    valueInputChangeHandler: emailInputChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
  } = useInput(emailValidator);
  const emailLabel = 'Email';
  const emailErrMessage = 'Invalid Email.';

  //overall formValidState
  const formValid =
    nameState.enteredValueIsValid && emailState.enteredValueIsValid;

  const formSubmissionHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formValid) {
      return;
    }
    console.log(
      `Name: ${nameState.enteredValue}\nEmail: ${emailState.enteredValue}`
    ); //using state gets value on every keystroke

    resetName();
    resetEmail();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <Input
        enteredValue={nameState.enteredValue}
        valueInputChangeHandler={nameInputChangeHandler}
        valueInputBlurHandler={nameInputBlurHandler}
        valueRenderError={nameState.valueRenderError}
        label={nameLabel}
        errMessage={nameErrMessage}
      />
      <Input
        enteredValue={emailState.enteredValue}
        valueInputChangeHandler={emailInputChangeHandler}
        valueInputBlurHandler={emailInputBlurHandler}
        valueRenderError={emailState.valueRenderError}
        label={emailLabel}
        errMessage={emailErrMessage}
      />
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
