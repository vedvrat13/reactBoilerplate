import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import App from './src/App';

function tick() {
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
