// import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import authReducer from './auth'


// const counterReducer = (state = INITIAL_STATE, action) => {
//   switch(action.type) {
//     case 'INCREASE': return { ...state, counter: state.counter + action.amount }
//     case 'DECREASE': return { ...state, counter: state.counter - 1 }
//     case 'TOGGLE': return { ...state, showCounter: !state.showCounter }
//     default: return INITIAL_STATE
//   }
// }

// const store = createStore(counterReducer)

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  }
})
