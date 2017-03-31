import {fromJS} from 'immutable';
import {assert} from 'chai';

import languageProviderReducer from '../reducer';
import {CHANGE_LOCALE} from '../constants';

describe('languageProviderReducer', () => {
  it('returns the initial state', () => {
    assert.deepEqual(languageProviderReducer(undefined, {}), fromJS({
      locale: 'en',
    }));
  });

  it('changes the locale', () => {
    assert.deepEqual(languageProviderReducer(undefined, {type: CHANGE_LOCALE, locale: 'zh'}).toJS(), {
      locale: 'zh',
    });
  });
});
