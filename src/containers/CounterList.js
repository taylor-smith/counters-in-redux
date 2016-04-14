import { connect } from 'react-redux';
import CounterGrid from '../components/CounterGrid';
import {
  incrementCounter,
  decrementCounter
} from '../actions';

function mapStateToProps(state) {
  return {counters: state.counters};
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(incrementCounter()),
    onDecrement: () => dispatch(decrementCounter())
  }
}

const CounterList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterGrid);

export default CounterList;