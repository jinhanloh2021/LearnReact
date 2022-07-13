import Input from '../SimpleInput/Input';
import useInput from '../../Hooks/useInput';
import emailValidator from '../SimpleInput/emailValidator';
import nameValidator from '../SimpleInput/nameValidator';

const BasicForm = () => {
  const {
    valueState: firstNameState,
    resetInput: resetFirstName,
    valueInputChangeHandler: firstNameInputChangeHandler,
    valueInputBlurHandler: firstNameInputBlurHandler,
  } = useInput(nameValidator);

  const {
    valueState: lastNameState,
    resetInput: resetLastName,
    valueInputChangeHandler: lastNameInputChangeHandler,
    valueInputBlurHandler: lastNameInputBlurHandler,
  } = useInput(nameValidator);

  const {
    valueState: emailState,
    resetInput: resetEmail,
    valueInputChangeHandler: emailInputChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
  } = useInput(emailValidator);

  //manage overall form validity
  const formValid =
    firstNameState.enteredValueIsValid &&
    lastNameState.enteredValueIsValid &&
    emailState.enteredValueIsValid;

  function formSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formValid) {
      return;
    }

    console.log(
      `Hello ${firstNameState.enteredValue} ${lastNameState.enteredValue}!\nYour email is: ${emailState.enteredValue}`
    );
    resetFirstName();
    resetLastName();
    resetEmail();
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <Input
          enteredValue={firstNameState.enteredValue}
          valueInputChangeHandler={firstNameInputChangeHandler}
          valueInputBlurHandler={firstNameInputBlurHandler}
          valueRenderError={firstNameState.valueRenderError}
          label="First Name"
          errMessage="First name cannot be empty."
        />
        <Input
          enteredValue={lastNameState.enteredValue}
          valueInputChangeHandler={lastNameInputChangeHandler}
          valueInputBlurHandler={lastNameInputBlurHandler}
          valueRenderError={lastNameState.valueRenderError}
          label="Last Name"
          errMessage="Last name cannot be empty."
        />
      </div>
      <Input
        enteredValue={emailState.enteredValue}
        valueInputChangeHandler={emailInputChangeHandler}
        valueInputBlurHandler={emailInputBlurHandler}
        valueRenderError={emailState.valueRenderError}
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
