# Initializable reducer
[![npm version](https://badge.fury.io/js/initializable-reducer.svg)](https://badge.fury.io/js/initializable-reducer)
[![Build Status](https://travis-ci.org/oreshinya/initializable-reducer.svg?branch=master)](https://travis-ci.org/oreshinya/initializable-reducer)

Initializing reducers action and associated higher order reducer for redux.

## Installation

```
$ npm i --save initializable-reducer
```

## Usage

```javascript
import { createStore } from 'redux';
import { initializeReducers, enableInitializing } from 'initializable-reducer';

const count = (num) => {
  return { type: 'COUNT', num };
};

// Wrap a reducer if you want to make initializable.
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

store.getState(); // => 100

// Initialize reducers
store.dispatch(initializeReducers());

store.getState(); // => 2
```
