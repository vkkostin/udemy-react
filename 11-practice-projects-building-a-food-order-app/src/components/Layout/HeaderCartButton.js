import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import { useContext, useEffect, useState } from 'react'
import CartContext from '../../store/cart-context'

const HeaderCartButton = props => {
  const [butnIsHighlighted, setButnIsHighlighted] = useState(false)
  const { items } = useContext(CartContext)

  const numberOfCartItems = items.reduce((acc, item) => acc + item.amount, 0)

  const btnClasses = `${classes.button} ${butnIsHighlighted ? classes.bump : ''}`


  useEffect(() => {
    if (items.length === 0) {
      return
    }

    setButnIsHighlighted(true)

    const timer = setTimeout(() => {
      setButnIsHighlighted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>
        Your Cart
      </span>
      <span className={classes.badge}>
        {numberOfCartItems}
      </span>
    </button>
  );
}

export default HeaderCartButton