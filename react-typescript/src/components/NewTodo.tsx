import { useRef, useContext } from "react"
import classes from './NewTodo.module.css'
import { TodosContext } from "../store/todos-context"

const NewTodo: React.FC = () => {
  const todoTextInput = useRef<HTMLInputElement>(null)
  const todosCtx = useContext(TodosContext)


  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()

    const enteredText = todoTextInput.current!.value

    if (enteredText.trim().length === 0) {
      // throw an error
      return
    }

    todosCtx.addTodo(enteredText)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input ref={todoTextInput} id="text" type="text"></input>
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo