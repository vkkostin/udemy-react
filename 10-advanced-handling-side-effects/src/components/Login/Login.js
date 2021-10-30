import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

const getValue = (state, action) => {
  switch (action.type) {
    case 'USER_INPUT': return action.value;
    case 'INPUT_BLUR': return state.value;
    default: return '';
  }
}

const emailReducer = (state, action) => {
  const value = getValue(state, action);

  return { value, isValid: value.includes('@') }
}

const passwordReducer = (state,action) => {
  const value = getValue(state, action);

  return { value, isValid: value.trim().length > 6 }
}

const Login = (props) => {
  const authContext = useContext(AuthContext);
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null
  })

  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('CLEANUP RUNNING');
    }
  }, [])

  const { isValid: isEmailValid } = emailState;
  const { isValid: isPasswordValid } = passwordState;

  useEffect(() => {
    const handler = setTimeout(() => {
      // console.log('FORM');
      setFormIsValid(isEmailValid && isPasswordValid);
    }, 500);

    // Clean Up Function
    // this runs BEFORE subsequent effect runs and on component unmount
    return () => {
      // console.log('CLEAN');
      clearTimeout(handler);
    }
  }, [isEmailValid, isPasswordValid])

  const emailChangeHandler = ({ target: { value } }) => dispatchEmail({type: 'USER_INPUT', value});

  const passwordChangeHandler = ({ target: { value } }) => dispatchPassword({ type: 'USER_INPUT', value });

  const validateEmailHandler = () => dispatchEmail({type: 'INPUT_BLUR'});

  const validatePasswordHandler = () => dispatchPassword({ type: 'INPUT_BLUR' });

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authContext.onLogin(emailState.value, passwordState.value);
    } else if (!isEmailValid) {
      emailInputRef.current.activate();
    } else {
      passwordInputRef.current.activate();
    }
  };

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          label='E-Mail'
          id="email"
          type="email"
          value={emailState.value}
          isValid={isEmailValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          label='Password'
          id="password"
          type="password"
          value={passwordState.value}
          isValid={isPasswordValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
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
