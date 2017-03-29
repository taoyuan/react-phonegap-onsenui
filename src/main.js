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

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
// if (process.env.NODE_ENV === 'production') {
//   require('offline-plugin/runtime').install(); // eslint-disable-line global-require
// }
