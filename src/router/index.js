import Vue from 'vue';
import VueRouter from 'vue-router';
import Nopagefound  from '../views/shared-views/Nopagefound.vue';
import Home from '../views/Home.vue';
import Template from '../views/template/template.vue'; 
import Login from '../views/Login.vue';
import { navigationGuard } from '../shared/navigation.guard';

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    redirect: '/init/login',    
  },
  {
    path: '/init/login',
    name: 'login',    
    component: Login,
    beforeEnter: navigationGuard.guardMainRoute
  },
  {
    path: '/dashboard',   
    name: 'dashboard',
    component: Template,
    beforeEnter: navigationGuard.guardMainRoute,
    children: [
      {
        title: 'home',
        path: '/',
        name: 'home',   
        component: Home,        
      }
    ]  
  },
  {
    path: '*',
    component: Nopagefound
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/shared-views/About.vue')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
