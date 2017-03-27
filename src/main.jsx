import React from 'react';
import ReactDOM from 'react-dom';

require('onsenui/css/onsenui.css');
require('onsenui/css/onsen-css-components.css');
require('onsenui');

import App from './App';

const rootElement = document.getElementById('app');
ReactDOM.render(
  <App/>,
  rootElement
);

