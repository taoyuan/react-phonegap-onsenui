import { fromJS } from 'immutable';

import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
} from './actions';

const initialState = fromJS({
});

function languageProviderReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_REQUEST:
      return state
        .set('error', false);
    case AUTH_SUCCESS:
      return state
        .set('user', action.user);
    case AUTH_FAILURE:
      return state
        .set('error', action.error)
        .set('login', false);
    default:
      return state;
  }
}

export default languageProviderReducer;
