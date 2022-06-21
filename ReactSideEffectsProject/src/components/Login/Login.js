import React, { useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const ACTIONS = {
  EMAIL_CHANGE: 'email-change',
  EMAIL_BLUR: 'email-blur',
  PASSWORD_CHANGE: 'password-change',
  PASSWORD_BLUR: 'password-blur',
};

//called when dispatchForm is called, which is when we want to update the form state.
const formReducer = (lastState, action) => {
  switch (action.type) {
    case ACTIONS.EMAIL_CHANGE:
      return { ...lastState, email: action.payload };
    case ACTIONS.EMAIL_BLUR:
      return { ...lastState, emailValid: lastState.email.includes('@') };
    case ACTIONS.PASSWORD_CHANGE:
      return { ...lastState, password: action.payload };
    case ACTIONS.PASSWORD_BLUR:
      return { ...lastState, passwordValid: lastState.password.length >= 6 };
    default:
      return lastState;
  }
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  // const [formIsValid, setFormIsValid] = useState(false);

  const [formState, dispatchForm] = useReducer(formReducer, {
    email: '',
    emailValid: true,
    password: '',
    passwordValid: true,
  });

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     console.log('check validity');
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 500);
  //   return () => {
  //     console.log('cleanup');
  //     clearTimeout(timeoutId);
  //     // native js method. When new keystroke is registered within 500ms of the previous, the cleanup() is called ,
  //     // which clearTimeout of the previous useEffect that has not executed. This debounces the validation.
  //     // setFormIsValid will only run if a keystroke is not pressed for 500ms.
  //   };
  //   //cleanup function. Runs before the useEffect function runs, except for the first time, and on unmount.
  //   //Implement concepts such as debouncing and throttling in cleanup function
  // }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    dispatchForm({ type: ACTIONS.EMAIL_CHANGE, payload: event.target.value }); //sent to formReducer as action object.
  };

  const passwordChangeHandler = (event) => {
    dispatchForm({
      type: ACTIONS.PASSWORD_CHANGE,
      payload: event.target.value,
    });
  };

  const validateEmailHandler = () => {
    dispatchForm({ type: ACTIONS.EMAIL_BLUR });
  };

  const validatePasswordHandler = () => {
    dispatchForm({ type: ACTIONS.PASSWORD_BLUR });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(formState.email, formState.password);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            !formState.emailValid ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={formState.email}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler} //On blur is the opposite of focus. When user clicks out of text box.
          />
        </div>
        <div
          className={`${classes.control} ${
            !formState.passwordValid ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formState.password}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button
            type="submit"
            className={classes.btn}
            disabled={
              !formState.emailValid ||
              !formState.passwordValid ||
              !formState.password.length ||
              !formState.email.length
            }
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
