/**
 * Initializer execution phase.
 *
 * This phase will execute all initializer scripts in a directory, allowing the
 * application to initialize modules, including connecting to databases and
 * other network services.
 *
 * Examples:
 *
 *   app.phase(initializers(require.context('./boot', true, /^\.\/.*\.(js|jsx)$/)));
 *
 * @param {Function} require
 * @return {Function}
 * @api public
 */
export default function (require) {
  return function (done) {
    let files = require.keys && require.keys();
    if (!files || !files.length) {
      return done();
    }
    files = files.sort();

    const that = this;

    let idx = 0;

    // eslint-disable-next-line consistent-return
    function next(err) {
      if (err) {
        return done(err);
      }

      // eslint-disable-next-line no-plusplus
      const file = files[idx++];
      // all done
      if (!file) {
        return done();
      }

      try {
        let mod = require(file);

        // for es6 import
        if (typeof mod !== 'function' && typeof mod.default === 'function') {
          mod = mod.default;
        }

        if (typeof mod === 'function') {
          const arity = mod.length;
          if (arity === 1) {
            // Async initializer.  Exported function will be invoked, with next
            // being called when the initializer finishes.
            mod.call(that, next);
          } else {
            // Sync initializer.  Exported function will be invoked, with next
            // being called immediately.
            mod.call(that);
            return next();
          }
        } else {
          // Initializer does not export a function.  Requiring the initializer
          // is sufficient to invoke it, next immediately.
          return next();
        }
      } catch (ex) {
        return next(ex);
      }
    }

    return next();
  };
}
