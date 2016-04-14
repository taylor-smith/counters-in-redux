
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import counters from './reducers/reducers.js'
import CounterList from './containers/CounterList.js'


const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(counters);

const renderCounter = () => {
  render (
    <Provider store={store}>
      <CounterList />
    </Provider>,
    document.getElementById('app')
  )
}

store.subscribe(renderCounter);
renderCounter();