import Vue from 'vue';

import VueI18n from 'vue-i18n';
import Config from 'Config/locale';
import text from '../locales/text';
import numbers from '../locales/numbers';

Vue.use(VueI18n);

export default new VueI18n({
  locale: Config.defaultLocale,
  messages: text,
  fallbackLocale: 'en-us',
  numberFormats: numbers,
});
