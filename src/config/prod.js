'use strict';

import baseConfig from './base';

let config = {
  appEnv: 'prod',
};

export default Object.freeze(Object.assign({}, baseConfig, config));
