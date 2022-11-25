import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Inicio.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/Busqueda.vue')
    },
    {
      path: '/:pathMath(.*)*',
      //component: () => import('../views/Not_Found.vue')
      redirect: '/'
    },
    {
      path: '/productos',
      name: 'productos',
      component: () => import('../views/productos.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login_window.vue')
    }
  ]
})

export default router
