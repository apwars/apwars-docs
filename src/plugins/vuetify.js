import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import '@fortawesome/fontawesome-free/css/all.css';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
  theme: {
    themes: {
      light: {
        primary: '#FAD200',
        'primary-0': '#FFB800',
        'secondary-lighten-1': '#BEA38D',

        secondary: '#966A3C',

        black: '#000000',
        'black-0': '#222222',
        'black-1': '#18191F',

        white: '#FFFFFF',
      },
    },
  },
});
