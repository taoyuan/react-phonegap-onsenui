import {translationMessages} from '../i18n';

export default function (done) {
  this.messages = translationMessages;

// Hot reloadable translation json files
  if (module.hot) {
    // modules.hot.accept does not accept dynamic dependencies,
    // have to be constants at compile-time
    Promise.fromCallback(cb => module.hot.accept('./i18n', cb)).asCallback(done);
    return;
  }

// Chunked polyfill for browsers without Intl support
  if (!window.Intl) {
    Promise.resolve(import('intl')).then(() => Promise.all([
      import('intl/locale-data/jsonp/en.js'),
      import('intl/locale-data/jsonp/zh.js'),
    ])).asCallback(done);
    return;
  }

  done();
}
