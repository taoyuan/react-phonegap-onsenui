import "babel-polyfill";
import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";
import "onsenui";
// Import all the third party stuff
import bootify from "bootify";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import ContextProvider from "react-with-context";
import {HashRouter as Router} from "react-router-dom";
import boot from "./utils/boot";
// import {useScroll} from "react-router-scroll";
import "sanitize.css/sanitize.css";
// Import Language Provider
import LanguageProvider from "services/LanguageProvider";
/* eslint-disable import/no-webpack-loader-syntax */
// Import CSS reset and Global Styles
import "./global-styles";
// Import routes
// import createRoutes from "./routes";
import Main from "containers/Main";

/* eslint-enable import/no-webpack-loader-syntax */

const app = bootify({});
app.phase(boot(require.context('./boot', true, /^\.\/.*\.(js|jsx)$/)));
app.boot((err) => {
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


