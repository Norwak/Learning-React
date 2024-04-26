import { connect, useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { Component } from 'react';



// class Counter extends Component {
//   increment() {
//     this.props.increment();
//   }

//   decrement() {
//     this.props.decrement();
//   }

//   toggleCounter() {

//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.increment.bind(this)}>Increment</button>
//           <button onClick={this.decrement.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounter.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     counter: state.counter,
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'}),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);



const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  function increment() {
    dispatch({type: 'increment'});
  }

  function decrement() {
    dispatch({type: 'decrement'});
  }

  const toggleCounter = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <button onClick={toggleCounter}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
