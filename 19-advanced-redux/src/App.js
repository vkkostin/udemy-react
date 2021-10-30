import { useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification'
import { sendCartData, fetchCartData } from './store/cart-slice'

let isInitial = true

const App = () => {
  const dispatch = useDispatch()
  const showCart = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return
    }

    if (cart.changed) {
      dispatch(sendCartData(cart))
    }

  }, [cart, dispatch])

  return (
    <Fragment>
      {notification ? <Notification notification={notification}/> : null}
      <Layout>
        {showCart ? <Cart /> : null}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
