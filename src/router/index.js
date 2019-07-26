import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/screens/Home';
import NotFound from '@/screens/NotFound';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});
