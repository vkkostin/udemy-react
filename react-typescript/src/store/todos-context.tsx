import React from "react";
import { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
})

const TodosContextProvider: React.FC = props => {
  const [todos, setTodos] = useState<Todo[]>([])

  // const todos = [
  //   new Todo('Learn React'),
  //   new Todo('Learn Typescript'),
  // ]

  const addTodoHandler = (text: string) => {
    setTodos(prevState => [...prevState, new Todo(text)])
  }

  const removeTodoHandler = (todoId: string) => {
    setTodos(prevState => prevState.filter(todo => todo.id !== todoId))
  }

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  }

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  )
}

export default TodosContextProvider
