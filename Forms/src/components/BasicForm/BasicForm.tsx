import Input from '../SimpleInput/Input';
import useInput from '../../Hooks/useInput';
import emailValidator from './emailValidator';
import nameValidator from './nameValidator';

const BasicForm = () => {
  const {
    enteredValue: enteredFirstName,
    resetInput: resetFirstName,
    enteredValueIsValid: enteredFirstNameIsValid,
    valueRenderError: firstNameRenderError,
    valueInputChangeHandler: firstNameInputChangeHandler,
    valueInputBlurHandler: firstNameInputBlurHandler,
  } = useInput(nameValidator);

  const {
    enteredValue: enteredLastName,
    resetInput: resetLastName,
    enteredValueIsValid: enteredLastNameIsValid,
    valueRenderError: lastNameRenderError,
    valueInputChangeHandler: lastNameInputChangeHandler,
    valueInputBlurHandler: lastNameInputBlurHandler,
  } = useInput(nameValidator);

  const {
    enteredValue: enteredEmail,
    resetInput: resetEmail,
    enteredValueIsValid: enteredEmailIsValid,
    valueRenderError: emailRenderError,
    valueInputChangeHandler: emailInputChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
  } = useInput(emailValidator);

  //manage overall form validity
  const formValid =
    enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid;

  function formSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formValid) {
      return;
    }

    console.log(
      `Hello ${enteredFirstName} ${enteredLastName}!\nYour email is: ${enteredEmail}`
    );
    resetFirstName();
    resetLastName();
    resetEmail();
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <Input
          enteredValue={enteredFirstName}
          valueInputChangeHandler={firstNameInputChangeHandler}
          valueInputBlurHandler={firstNameInputBlurHandler}
          valueRenderError={firstNameRenderError}
          label="First Name"
          errMessage="First name cannot be empty."
        />
        <Input
          enteredValue={enteredLastName}
          valueInputChangeHandler={lastNameInputChangeHandler}
          valueInputBlurHandler={lastNameInputBlurHandler}
          valueRenderError={lastNameRenderError}
          label="Last Name"
          errMessage="Last name cannot be empty."
        />
      </div>
      <Input
        enteredValue={enteredEmail}
        valueInputChangeHandler={emailInputChangeHandler}
        valueInputBlurHandler={emailInputBlurHandler}
        valueRenderError={emailRenderError}
        label="Email-address"
        errMessage="Invalid email address"
      />
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
