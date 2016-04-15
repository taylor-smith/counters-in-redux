'use strict';

import {
  ADD_COUNTER,
  REMOVE_COUNTER,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from '../actions';

function counters(state={counters: []}, action) {
  switch (action.type) {
    case ADD_COUNTER:
      return Object.assign({}, state, {
        counters: [
          ...state.counters, 0
        ]
      })
    case REMOVE_COUNTER:
      return Object.assign({}, state, {
        counters: [
          ...state.counters.slice(0, -1)
        ]
      })
    case INCREMENT_COUNTER:
      return Object.assign({}, state, {
        ...state,
        counters: [
          ...state.counters.slice(0, action.index),
          state.counters[action.index] + 1,
          ...state.counters.slice(action.index + 1)
        ]
      })
    case DECREMENT_COUNTER:
      return Object.assign({}, state, {
        counters: [
          ...state.counters.slice(0, action.index),
          state.counters[action.index] - 1,
          ...state.counters.slice(action.index + 1)
        ]
      })
    default:
      return state;
  }
}

export default counters;