import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Landing from './pages/Landing.vue';
import Login from './pages/Login.vue';
import Noticias from './pages/Noticias.vue';
import Contacto from './pages/Contacto.vue';
import Equipo from './pages/Equipo.vue';
import Profile from './pages/Profile.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';


import { isLoggedIn } from './utils/auth'

import AdminMainNavbar from './pages/administrador/layout/AdminMainNavbar.vue';
import Dashboard from './pages/administrador/Dashboard.vue';
import AdministrarNoticias from './pages/administrador/AdministrarNoticias.vue';
import EditarNoticia from './pages/administrador/EditarNoticia.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/equipo',
      name: 'equipo',
      components: { default: Equipo, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/noticias',
      name: 'noticias',
      components: { default: Noticias, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/login',
      name: 'login',
      components: { default: Login, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/contacto',
      name: 'contacto',
      components: { default: Contacto, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/profile',
      name: 'profile',
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/administrador',
      name: 'administrador',
      components: { default: Dashboard, header: AdminMainNavbar, footer: MainFooter },
      meta: { onlyAdmin: true },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/administrador/noticias',
      name: 'administrar-noticias',
      meta: { onlyAdmin: true },
      components: { default: AdministrarNoticias, header: AdminMainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/administrador/noticias/editar/',
      name: 'editar-noticia',
      meta: { onlyAdmin: true },
      components: { default: EditarNoticia, header: AdminMainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/administrador/noticias/editar/:id',
      meta: { onlyAdmin: true },
      name: 'editar-noticia',
      components: { default: EditarNoticia, header: AdminMainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});


router.beforeEach((to, from, next) => {
  if(to.meta.onlyAdmin) {
    if(isLoggedIn()){
      next()
    }else{
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }  
})

export default router