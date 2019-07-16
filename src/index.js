import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore(
  reducer,
  // compose multiple middleware flows together into one flow
  compose(
    // our custom middleware
    applyMiddleware(thunk, logger),
    // redux dev tools middleware
    window._REDUX_DEVTOOLS_EXTENSION_
      ? window._REDUX_DEVTOOLS_EXTENSION_()
      : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
