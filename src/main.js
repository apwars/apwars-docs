import Vue from 'vue';
import App from './App';

import vuetify from './plugins/vuetify';
import i18n from './plugins/i18n';

import router from './router';

import { VueMaskDirective } from 'v-mask';
Vue.directive('mask', VueMaskDirective);

Vue.config.productionTip = false;

export default new Vue({
  vuetify,
  i18n,
  router,
  VueMaskDirective,
  render: h => h(App),
}).$mount('#app');
