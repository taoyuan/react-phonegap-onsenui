import {cancel, put, take, takeLatest} from 'redux-saga/effects';
import {LOCATION_CHANGE} from 'react-router-redux';
import {AUTH_REQUEST, authFailure, authSuccess} from './actions';

/**
 * Github repos request/response handler
 */
export function* authenticate(action) {
  try {
    // authenticate with action.creds
    yield put(authSuccess(action.creds));
  } catch (err) {
    yield put(authFailure(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* login() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(AUTH_REQUEST, authenticate);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  login,
];
