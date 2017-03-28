import React from 'react';
import ReactDOM from 'react-dom';

require('onsenui/css/onsenui.css');
require('onsenui/css/onsen-css-components.css');
require('onsenui');

import ExampleApp from './containers/examples';

const rootElement = document.getElementById('app');
ReactDOM.render(
  <ExampleApp/>,
  rootElement
);

