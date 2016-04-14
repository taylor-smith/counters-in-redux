import React, { PropTypes, Component } from 'react';

class AddCounter extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { addCounter } = this.props;
    return (
      <div>
        <button className="addCounter" onClick={addCounter}>Add Counter</button>
      </div>
    )
  }
}

AddCounter.PropTypes = {
  addCounter: PropTypes.func.isRequired,
}

export default AddCounter;