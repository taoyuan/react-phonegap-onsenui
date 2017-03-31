import {injectGlobal} from "styled-components";

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  
  .text-input--material__label {
    color: #05c1e3;
  }
  
  .text-input--material:focus {
    background-image: -webkit-linear-gradient(#05c1e3, #05c1e3), -webkit-linear-gradient(bottom, transparent 1px, #afafaf 1px);
    background-image: -moz-linear-gradient(#05c1e3, #05c1e3), -moz-linear-gradient(bottom, transparent 1px, #afafaf 1px);
  }
  
  .navigation-bar--material {
    background: #05c1e3;
  }
`;

