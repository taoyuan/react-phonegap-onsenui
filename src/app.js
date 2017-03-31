import 'babel-polyfill';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import 'onsenui';
import 'sanitize.css/sanitize.css';

import bootify from 'bootify';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import ContextProvider from 'react-with-context';
import {HashRouter as Router} from 'react-router-dom';

// Import Language Provider
import LanguageProvider from 'services/LanguageProvider';
import Main from 'containers/Main';

import './global-styles';
import boot from './utils/boot';

const app = bootify({});
app.phase(boot(require.context('./boot', true, /^\.\/.*\.(js|jsx)$/)));
app.boot(err => {
  if (err) throw err;

  ReactDOM.render(
    <ContextProvider context={{app}}>
      <Provider store={app.store}>
        <LanguageProvider messages={app.messages}>
          <Router history={app.history}>
            <Main/>
          </Router>
        </LanguageProvider>
      </Provider>
    </ContextProvider>,
    document.getElementById('app')
  );
});
