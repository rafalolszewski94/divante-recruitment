import Vue from 'vue';
import VueNotification from '@/plugins/Notifications';
import App from './App';
import router from './router';
import './styles/style.scss';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueNotification);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
