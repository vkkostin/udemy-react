import useInput from '../hooks/use-input'

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    valueBlurHandler: nameBlurHandler,
    valueIsValid: enteredNameIsValid,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '')

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    valueBlurHandler: emailBlurHandler,
    valueIsValid: enteredEmailIsValid,
    reset: resetEmailInput
  } = useInput(value => value.trim() !== '' && value.includes('@'))

  // const [enteredName, setEnteredName] = useState('')
  // const [enteredEmail, setEnteredEmail] = useState('')
  // const nameInputRef = useRef()
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)
  // const [formIsValid, setFormIsValid] = useState(false)

  // const enteredNameIsValid = enteredName.trim() !== ''
  // const enteredEmailIsValid = enteredEmail.trim() !== '' && enteredEmail.includes('@')
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched
  // const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched

  const formIsValid = enteredNameIsValid && enteredEmailIsValid

  // useEffect(() => {
  //   setFormIsValid(enteredNameIsValid)
  // }, [enteredNameIsValid])

  // const nameInputChangeHandler = event => {
  //   setEnteredName(event.target.value)
  // }

  // const emailInputChangeHandler = event => {
  //   setEnteredEmail(event.target.value)
  // }

  const formSubmissionHandler = event => {
    event.preventDefault()

    // setEnteredNameTouched(true)
    // setEnteredEmailTouched(true)

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return
    }

    // state is better if validation happens on every keystroke
    // or if you need to reset the state
    console.log(enteredName)

    // ref is better if validation only happens on form submission
    // console.log(nameInputRef.current.value)
    resetNameInput()
    resetEmailInput()
    // setEnteredName('')
    // setEnteredNameTouched(false)

    // setEnteredEmail('')
    // setEnteredEmailTouched(false)
  }

  // const nameInputBlurHandler = () => {
  //   setEnteredNameTouched(true)
  // }

  // const emailInputBlurHandler = () => {
  //   setEnteredEmailTouched(true)
  // }

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          onBlur={nameBlurHandler}
          value={enteredName}
          type='text'
          id='name'
          onChange={nameChangedHandler}
        />
        {nameInputHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          onBlur={emailBlurHandler}
          value={enteredEmail}
          type='email'
          id='email'
          onChange={emailChangedHandler}
        />
        {emailInputHasError && <p className="error-text">Email must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
