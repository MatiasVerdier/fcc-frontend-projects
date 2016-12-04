import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
// Components
import App from './App';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';

Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home, name: 'home' },
];

// Add 404 route at the end for unhandled routes
routes.push({ path: '*', component: PageNotFound });

const router = new VueRouter({
  mode: 'history',
  routes,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
