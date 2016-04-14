import { connect } from 'react-redux';
import CounterGrid from '../components/CounterGrid';
import {
  addCounter,
  removeCounter,
  incrementCounter,
  decrementCounter
} from '../actions';

function mapStateToProps(state) {
  return {counters: state.counters};
}

function mapDispatchToProps(dispatch) {
  return {
    addCounter: () => dispatch(addCounter()),
    removeCounter: () => dispatch(removeCounter()),
    onIncrement: (index) => dispatch(incrementCounter(index)),
    onDecrement: (index) => dispatch(decrementCounter(index))
  }
}

const CounterList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterGrid);

export default CounterList;