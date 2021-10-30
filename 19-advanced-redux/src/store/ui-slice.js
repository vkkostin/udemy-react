import { createSlice } from '@reduxjs/toolkit'

const { reducer, actions } = createSlice({
  name: 'ui',
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible
    },
    showNotification(state, { payload }) {
      const { status, title, message } = payload
      state.notification = { status, title, message }
    }
  }
})

export {
  reducer as default,
  actions as uiActions
}
