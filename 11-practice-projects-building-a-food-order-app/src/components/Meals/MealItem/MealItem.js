import { useContext } from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cart-context'

const MealItem = props => {
  const { id, name, price, description } = props

  const cartCtx = useContext(CartContext)

  const priceFormatted = `$${price.toFixed(2)}`

  const addToCartHandler = amount => cartCtx.addItem({ id, name, amount, price })

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={price}>{priceFormatted}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={id} />
      </div>
    </li>
  );
}

export default MealItem