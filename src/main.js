import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import './index.css';
import VueLazyLoad from 'vue3-lazyload';

createApp(App)
  .use(router)
  .use(VueLazyLoad)
  .mount('#app');
