/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS } from 'immutable';
import config from 'config';
import {
  CHANGE_LOCALE,
} from './constants';

const initialState = fromJS({
  locale: config.defaultLanguage,
});

function languageProviderReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return state
        .set('locale', action.locale);
    default:
      return state;
  }
}

export default languageProviderReducer;
