import useInput from "../hooks/use-input";

const isPresent = value => value.trim() !== ''

const isEmail = value => isPresent(value) && value.includes('@')

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    valueIsValid: firstNameIsValid,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    hasError: firstNameHasError,
    reset: resetFirstName,
  } = useInput(isPresent)
  const {
    value: lastNameValue,
    valueIsValid: lastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    hasError: lastNameHasError,
    reset: resetLastName,
  } = useInput(isPresent)
  const {
    value: emailValue,
    valueIsValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    hasError: emailHasError,
    reset: resetEmail,
  } = useInput(isEmail)

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid

  const submitHandler = event => {
    event.preventDefault()

    if (!formIsValid) {
      return
    }

    resetFirstName()
    resetLastName()
    resetEmail()
  }

  const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control'
  const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control'
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && <p className="error-text">Please enter a first name.</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && <p className="error-text">Please enter a last name.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Please enter a valid email address.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
