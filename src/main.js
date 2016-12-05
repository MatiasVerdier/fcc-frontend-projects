import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VueJsonp from 'vue-jsonp';

// Components
import App from './App';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
import RandomQuotes from './pages/RandomQuotes';
import LocalWeather from './pages/LocalWeather';
import WikipediaViewer from './pages/WikipediaViewer';
import TwitchViewer from './pages/TwitchViewer';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueJsonp);

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/projects/random-quotes', component: RandomQuotes },
  { path: '/projects/local-weather', component: LocalWeather },
  { path: '/projects/wikipedia-viewer', component: WikipediaViewer },
  { path: '/projects/twitch-viewer', component: TwitchViewer },
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
