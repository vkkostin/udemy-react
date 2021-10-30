import { useContext, useState, Fragment } from 'react'
import classes from './Cart.module.css';
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import Checkout from './Checkout';

const Cart = props => {
  const [isCheckout, setIsCheckout] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [didSubmit, setDidSubmit] = useState(false)

  const cartCtx = useContext(CartContext)

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0

  const cartItemAddHandler = item => () => cartCtx.addItem({ ...item, amount: 1 })

  const cartItemRemoveHandler = id => () => cartCtx.removeItem(id)

  const cartItems = cartCtx.items.map(item =>
    <CartItem
      key={item.id}
      item={item}
      onAdd={cartItemAddHandler}
      onRemove={cartItemRemoveHandler}
    />
  )

  const orderHandler = () => {
    setIsCheckout(true)
  }

  const submitOrderHandler = async userData => {
    setIsSubmitting(true)
    await fetch('https://testing-3ad08-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items
      })
    })

    setIsSubmitting(false)
    setDidSubmit(true)
    cartCtx.clearCart()
  }

  const modalActions = 
    <div className={classes.actions}>
      <button onClick={props.onHideCart} className={classes['button--alt']}>Close</button>
      {hasItems ? <button className={classes.button} onClick={orderHandler}>Order</button> : null}
    </div>

  let modalContent;

  if (didSubmit) {
    modalContent =
      <Fragment>
        <p>Successfully sent the order!</p>
        <div className={classes.actions}>
          <button onClick={props.onHideCart} className={classes.button}>Close</button>
        </div>
      </Fragment>
  } else if (isSubmitting) {
    modalContent =
      <p>Sending order data...</p>
  } else {
    modalContent =
      <Fragment>
      <ul className={classes['cart-items']}>
        {cartItems}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout ? <Checkout onConfirm={submitOrderHandler} onCancel={props.onHideCart}  /> : modalActions}
    </Fragment>
  }

  return <Modal onClick={props.onHideCart}>{modalContent}</Modal>
}

export default Cart
