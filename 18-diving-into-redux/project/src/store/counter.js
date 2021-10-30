import { createSlice } from '@reduxjs/toolkit'

const { reducer, actions } = createSlice({
  name: 'counter',
  initialState: { counter: 0, showCounter: true },
  reducers: {
    increase(state, { payload = 1 }) {
      state.counter = state.counter + payload
    },
    decrease(state) {
      state.counter--
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    }
  }
})

export { actions }
export default reducer