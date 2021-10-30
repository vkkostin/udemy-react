import { useState, useRef } from 'react';
import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper'

const AddUser = props => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  // Do this rarely
  const clearRef = ref => ref.current.value = ''

  const addUserHandler = event => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value
    const enteredAge = ageInputRef.current.value

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).'
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).'
      });
      return
    }

    props.onAddUser(enteredName, enteredAge);

    clearRef(nameInputRef);
    clearRef(ageInputRef)
  }

  const errorHandler = () => setError(null)
  
  return (
    <Wrapper>
      {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            ref={nameInputRef}
            id="username"
            type="text"
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            ref={ageInputRef}
            id="age"
            step="1"
            type="number"
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddUser;
