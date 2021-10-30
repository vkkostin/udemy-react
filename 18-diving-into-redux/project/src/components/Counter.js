import { useSelector, useDispatch, connect } from 'react-redux'
import classes from './Counter.module.css';
import { actions } from '../store/counter';
// import { Component } from 'react'

const Counter = () => {
  // TO READ STATE
  // extract a state "slice" from the store - it is then returned
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.showCounter)
  
  // TO UPDATE STATE
  const dispatch = useDispatch()

  // const incrementHandler = (amount = 1) => () => dispatch({ type: 'INCREASE', amount })
  const incrementHandler = amount => () => dispatch(actions.increase(amount)) // {type: SOME_UNIQUE_ID, payload: 10 }

  // const decrementHandler = () => dispatch({ type: 'DECREASE' })
  const decrementHandler = () => dispatch(actions.decrease())

  // const toggleCounterHandler = () => dispatch({ type: 'TOGGLE' })
  const toggleCounterHandler = () => dispatch(actions.toggleCounter())

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show ? <div className={classes.value}>{counter}</div> : null}
      <div>
        <button onClick={incrementHandler()}>Increment</button>
        <button onClick={incrementHandler(5)}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter

// class Counter extends Component {
//   incrementHandler = () => {
//     this.props.increment()
//   }
  
//   decrementHandler = () => {
//     this.props.decrement()
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler}>Increment</button>
//           <button onClick={this.decrementHandler}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'INCREMENT' }),
//     decrement: () => dispatch({ type: 'DECREMENT' })
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
