import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Galery from '@/views/galery/Galery.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/galeria',
    name: 'Galery',
    component: Galery
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
