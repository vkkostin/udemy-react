import React, { useState } from 'react';
// import styled from 'styled-components';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => props.isValid ? 'black' : 'red'}
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => props.isValid ? '#ccc' : 'red'};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//     background: ${props => props.isValid ? 'transparent' : '#ffd7d7'}
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = ({ target : { value } }) => {
    if (value.trim().length > 0) {
      setIsValid(true);
    }

    setEnteredValue(value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>

      {/* <FormControl isValid={isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
