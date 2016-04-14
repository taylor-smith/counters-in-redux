'use strict';

import {
  ADD_COUNTER,
  REMOVE_COUNTER,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from '../actions';

function counters(state={counters: [0]}, action) {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        ...state
      }
    case REMOVE_COUNTER:
      return {
        ...state
      }
    case INCREMENT_COUNTER:
      return {
        ...state
      }
    case DECREMENT_COUNTER:
      return {
        ...state
      }
    default:
      return state;
  }
}

export default counters;