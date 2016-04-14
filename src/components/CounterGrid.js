import React, { PropTypes, Component } from 'react';
import Counter from './Counter';

function CounterGrid({ counters, onIncrement, onDecrement }) {
  return (
    <div>
        {counters.map((count, index) => 
          <Counter 
            key={index}
            count={count}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
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