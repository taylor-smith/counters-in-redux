import React, { PropTypes, Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { count, onDecrement, onIncrement } = this.props;
    return (
      <div>
        <h1 className="counter">{count}</h1>
        <button className="onDecrement" onClick={onDecrement}>-</button>
        <button className="onIncrement" onClick={onIncrement}>+</button>
      </div>
    )
  }
}

Counter.PropTypes = {
  count: PropTypes.number.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
}

export default Counter;