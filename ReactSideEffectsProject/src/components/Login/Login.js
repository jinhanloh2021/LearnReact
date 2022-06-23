import React, { useReducer, useEffect, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import AuthContext from '../../store/auth-context';

const ACTIONS = {
  EMAIL_CHANGE: 'email-change',
  EMAIL_BLUR: 'email-blur',
  PASSWORD_CHANGE: 'password-change',
  PASSWORD_BLUR: 'password-blur',
  FORM_VALID: 'form-valid',
};

function validateEmail(email) {
  return email.includes('@');
}
function validatePassword(password) {
  return password.length >= 6;
}

//called when dispatchForm is called, which is when we want to update the form state.
const formReducer = (lastState, action) => {
  switch (action.type) {
    case ACTIONS.EMAIL_CHANGE:
      const emailChangeValid = validateEmail(action.payload);
      return {
        ...lastState,
        email: action.payload,
        emailValid: emailChangeValid,
        // formValid: emailChangeValid && lastState.passwordValid,
      };
    case ACTIONS.EMAIL_BLUR:
      const emailBlurValid = lastState.email.includes('@');
      return {
        ...lastState,
        emailValid: emailBlurValid,
        formValid:
          emailBlurValid &&
          lastState.passwordValid &&
          lastState.password.length,
      };
    case ACTIONS.PASSWORD_CHANGE:
      const passwordChangeValid = validatePassword(action.payload);
      return {
        ...lastState,
        password: action.payload,
        passwordValid: passwordChangeValid,
        // formValid: passwordChangeValid && lastState.emailValid,
      };
    case ACTIONS.PASSWORD_BLUR:
      const passwordBlurValid = validatePassword(lastState.password);
      return {
        ...lastState,
        passwordValid: passwordBlurValid,
        formValid:
          passwordBlurValid && lastState.emailValid && lastState.email.length,
      };
    case ACTIONS.FORM_VALID:
      return { ...lastState, formValid: action.payload };
    default:
      return lastState;
  }
};

const Login = () => {
  const context = useContext(AuthContext);

  const [formState, dispatchForm] = useReducer(formReducer, {
    email: '',
    emailValid: false,
    password: '',
    passwordValid: false,
    formValid: false,
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log('check validity');
      dispatchForm({
        type: ACTIONS.FORM_VALID,
        payload: formState.emailValid && formState.passwordValid,
      });
    }, 500);
    return () => {
      console.log('cleanup');
      clearTimeout(timeoutId);
      // native js method. When new keystroke is registered within 500ms of the previous, the cleanup() is called ,
      // which clearTimeout of the previous useEffect that has not executed. This debounces the validation.
      // dispatchForm will only run if a keystroke is not pressed for 500ms.
    };
    //cleanup function. Runs before the useEffect function runs, except for the first time, and on unmount.
    //Implement concepts such as debouncing and throttling in cleanup function
  }, [formState.emailValid, formState.passwordValid]);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

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
    if (formState.formValid) {
      context.onLogin(formState.email, formState.password);
    } else if (!formState.emailValid) {
      emailInputRef.current.activate();
    } else {
      passwordInputRef.current.activate();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          label="Email"
          type="email"
          isValid={formState.emailValid || formState.email.length === 0}
          value={formState.email}
          onChange={emailChangeHandler}
          obBlur={validateEmailHandler}
          ref={emailInputRef}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          isValid={formState.passwordValid || formState.password.length === 0}
          value={formState.password}
          onChange={passwordChangeHandler}
          obBlur={validatePasswordHandler}
          ref={passwordInputRef}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
