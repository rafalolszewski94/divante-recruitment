import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/screens/Home';
import About from '@/screens/About';
import Contact from '@/screens/Contact';
import Product from '@/screens/Product';
import NotFound from '@/screens/NotFound';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/product/:id',
          name: 'Product',
          component: Product,
        },
      ],
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
