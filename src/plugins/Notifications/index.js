import NotificationComponent from './Notification';

const Notification = {
  install(Vue) {
    this.instance = new Vue();

    Vue.component('notification', NotificationComponent);

    /* eslint-disable-next-line */
    Vue.prototype.$notification = {
      show(args) {
        Notification.instance.$emit('show', args);
      },
    };
  },
};

export default Notification;
