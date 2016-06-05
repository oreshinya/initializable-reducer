import assert from 'power-assert';
import { createStore } from 'redux';

import { initializeReducers, enableInitializing } from '../src';

const count = (num) => {
  return { type: 'COUNT', num };
};

const countReducer = enableInitializing((prevState=2, action) => {
  switch(action.type) {
    case 'COUNT':
      return action.num;
    default:
      return prevState;
  }
});

const store = createStore(countReducer);

store.dispatch(count(100));
assert(store.getState() === 100);

store.dispatch(initializeReducers());
assert(store.getState() === 2);
