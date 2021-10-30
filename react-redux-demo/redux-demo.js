const { createStore } = require('redux')

const INITIAL_STATE = { counter: 0 }

// reducer should be a pure function
const counterReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'INCREMENT': return { counter: state.counter + 1 }
    case 'DECREMENT': return { counter: state.counter - 1 }
    default: return INITIAL_STATE
  }
}

const { getState, subscribe, dispatch } = createStore(counterReducer)

const counterSubscriber = () => {
  console.log(getState())
}

subscribe(counterSubscriber)

dispatch({ type: 'INCREMENT' })
dispatch({ type: 'INCREMENT' })
dispatch({ type: 'INCREMENT' })
dispatch({ type: 'DECREMENT' })
dispatch({ type: 'DECREMENT' })
