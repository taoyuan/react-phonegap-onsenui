'use strict';

/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import ExampleApp from '../ExampleApp';

export function Main() {
  return (
    <ExampleApp>
    </ExampleApp>
  );
}

Main.propTypes = {
  children: React.PropTypes.node,
};

export default Main;
