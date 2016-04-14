export const ADD_COUNTER = 'ADD_COUNTER';
export const REMOVE_COUNTER = 'REMOVE_COUNTER';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function addCounter() {
  return {
    type: ADD_COUNTER
  };
}

export function removeCounter() {
  return {
    type: REMOVE_COUNTER
  }
}

export function incrementCounter() {
  return {
    type: INCREMENT_COUNTER
  }
}

export function decrementCounter() {
  return {
    type: DECREMENT_COUNTER
  }
}