import { useState, useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './AuthForm.module.css';
import { useHistory } from 'react-router';

const API_KEY = 'AIzaSyAVb0-RPfOZ2wFAzkEG7dej7Jxb7mi1oO4'

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false)
  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  const history = useHistory()

  const authCtx = useContext(AuthContext)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const sendRequest = type => {
    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value

    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:${type}?key=${API_KEY}`, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'applicaton/json'
      },
    }).then(response => {
      setIsLoading(false)
      if (response.ok) {
        return response.json()
      } else {
        return response.json().then(data => {
          throw new Error(data?.error?.message || 'Authentication failed!')
        })
      }
    }).then(data => {
      const expirationTime = new Date(new Date().getTime() + (Number(data.expiresIn) * 1000))
      authCtx.login(data.idToken, expirationTime.toISOString())
      history.replace('/')
    }).catch(error => {
      alert(error.message)
    })
  }

  const submitHandler = event => {
    event.preventDefault()

    setIsLoading(true)
    if (isLogin) {
      sendRequest('signInWithPassword')
    } else {
      sendRequest('signUp')
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input ref={emailInputRef} type='email' id='email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input ref={passwordInputRef} type='password' id='password' required />
        </div>
        <div className={classes.actions}>
          {isLoading ? <p>Sending request...</p> : <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
