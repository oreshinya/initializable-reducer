import assert from 'power-assert';
import { test } from 'eater/runner';
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

test('Wrapped reducer works correctly', (done) => {
  store.dispatch(count(100));
  assert(store.getState() === 100);
  done();
});

test('"initializeReducers" initializes wrapped reducers by first state', (done) => {
  store.dispatch(initializeReducers());
  assert(store.getState() === 2);
  done();
});
