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
  return function initializers(done) {
    let files = require.keys && require.keys();
    if (!files || !files.length) {
      return done();
    }
    files = files.sort();

    const that = this;

    let idx = 0;

    function next(err) {
      if (err) {
        return done(err);
      }

      let file = files[idx++];
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

        if (typeof mod == 'function') {
          let arity = mod.length;
          if (arity == 1) {
            // Async initializer.  Exported function will be invoked, with next
            // being called when the initializer finishes.
            mod.call(that, next);
          } else {
            // Sync initializer.  Exported function will be invoked, with next
            // being called immediately.
            mod.call(that);
            next();
          }
        } else {
          // Initializer does not export a function.  Requiring the initializer
          // is sufficient to invoke it, next immediately.
          next();
        }
      } catch (ex) {
        next(ex);
      }
    }

    next();
  }
}
