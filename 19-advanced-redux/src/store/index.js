import { configureStore } from '@reduxjs/toolkit'
import uiSliceReducer from './ui-slice'
import cartSliceReducer from './cart-slice'

export default configureStore({
  reducer: {
    ui: uiSliceReducer,
    cart: cartSliceReducer
  }
})
