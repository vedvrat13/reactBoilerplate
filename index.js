import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// Adding Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// App Store
import reducers from 'reducers';

// The Main App Container
import App from 'components/App';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>,
  document.getElementById('root')
);
