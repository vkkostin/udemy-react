import classes from './Todo.module.css'

const Todo: React.FC<{
  text: string,
  onRemoveTodo: () => void
}> = ({
  text,
  onRemoveTodo
}) => <li className={classes.item} onClick={onRemoveTodo}>{text}</li>

export default Todo