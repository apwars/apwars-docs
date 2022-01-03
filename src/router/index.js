import Vue from 'vue';
import VueRouter from 'vue-router';

import baseRoutes from './base-routes';

Vue.use(VueRouter);

const routes = [];

routes.push(...baseRoutes);

export default new VueRouter({ mode: 'history', routes });
