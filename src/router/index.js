import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/homeView'),
    meta: {
      title: 'Домашняя страница'
    }
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('@/views/settingsView'),
    meta: {
      title: 'Настройки'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/pages/base')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
