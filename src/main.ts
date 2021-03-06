import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Profile from './components/Profile.vue';
import Publications from './components/Publications.vue';
import Projects from './components/Projects.vue';
import ProDebNet from './components/Projects_components/ProDebNet.vue';

library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

const Routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/Publications',
    name: 'Publications',
    component: Publications,
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/Projects<ProDebNet>',
    name: 'ProDebNet',
    component: ProDebNet,
  } 
];

const router = new Router({
  routes: Routes,
  mode: 'hash',
  linkActiveClass: 'active',
});

Vue.use(Router);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
