import {addLocaleData} from 'react-intl';
import transform from 'lodash/transform';

addLocaleData(require('react-intl/locale-data/en'));
addLocaleData(require('react-intl/locale-data/zh'));

const DEFAULT_LOCALE = 'zh';

const locales = {
  en: require('./translations/en.json'),
  zh: require('./translations/zh.json'),
};

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE
    ? formatTranslationMessages(DEFAULT_LOCALE, locales.en)
    : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE
      ? defaultFormattedMessages[key]
      : messages[key];
    return Object.assign(formattedMessages, {[key]: formattedMessage});
  }, {});
};

export const translationMessages = transform(locales, (result, messages, locale) => {
  // eslint-disable-next-line no-param-reassign
  result[locale] = formatTranslationMessages(locale, messages);
  return result;
}, {});

