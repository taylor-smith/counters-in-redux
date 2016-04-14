import React, { PropTypes, Component } from 'react';
import Counter from './Counter';

function CounterGrid({ counters, addCounter, removeCounter, onIncrement, onDecrement }) {
  return (
    <div>
      <button type="button" onClick={addCounter}>Add Counter</button>
      <button type="button" onClick={removeCounter}>Remove Counter</button>
        {counters.map((count, index) => 
          <Counter 
            key={index}
            count={count}
            onIncrement={() => onIncrement(index)}
            onDecrement={() => onDecrement(index)}
          />
        )}
    </div>  
  )
}

CounterGrid.propTypes = {
  counters: PropTypes.array.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

export default CounterGrid;