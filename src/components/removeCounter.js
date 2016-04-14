import React, { PropTypes, Component } from 'react';

class RemoveCounter extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { removeCounter } = this.props;
    return (
      <div>
        <button className="removeCounter" onClick={removeCounter}>Remove Counter</button>
      </div>
    )
  }
}

RemoveCounter.PropTypes = {
  removeCounter: PropTypes.func.isRequired
}

export default RemoveCounter;