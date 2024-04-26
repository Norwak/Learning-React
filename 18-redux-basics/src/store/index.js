import { createStore } from "redux";

const initialState = {
  counter: 0,
  showCounter: true,
}

function counterReducer(state = initialState, action) {
  state = structuredClone(state);

  switch (action.type) {
    case 'increment':
      state.counter++;
      break;
    case 'decrement':
      state.counter--;
      break;
    case 'increase':
      state.counter += action.amount;
      break;
    case 'toggle':
      state.showCounter = !state.showCounter;
      break;
  }

  return state;
}

const store = createStore(counterReducer);

export default store;