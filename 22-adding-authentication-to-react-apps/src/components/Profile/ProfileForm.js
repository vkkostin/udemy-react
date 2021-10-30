import { useRef, useContext } from 'react';
import classes from './ProfileForm.module.css';
import AuthContext from '../../store/auth-context';
import { useHistory } from 'react-router';

const API_KEY = 'AIzaSyAVb0-RPfOZ2wFAzkEG7dej7Jxb7mi1oO4'

const ProfileForm = () => {
  const newPasswordInputRef = useRef()
  const authCtx = useContext(AuthContext)
  const history = useHistory()

  const submitHandler = event => {
    event.preventDefault()

    const enteredNewPassword = newPasswordInputRef.current.value

    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`, {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      history.replace('/')
    })
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input ref={newPasswordInputRef} minLength="7" type='password' id='new-password' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
