const language = window.navigator.userLanguage || window.navigator.language;

let defaultLanguage = 'en-us';

if (language.toLowerCase() === 'en-us') {
  defaultLanguage = language.toLowerCase();
}

export default {
  defaultLocale: defaultLanguage,
};
