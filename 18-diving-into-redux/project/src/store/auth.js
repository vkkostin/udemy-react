import { createSlice } from '@reduxjs/toolkit'

const { reducer, actions } = createSlice({
  name: 'authentication',
  initialState: { isAuthenticated: false },
  reducers: {
    login(state) {
      state.isAuthenticated = true
    },
    logout(state) {
      state.isAuthenticated = false
    }
  }
})

export { actions }
export default reducer