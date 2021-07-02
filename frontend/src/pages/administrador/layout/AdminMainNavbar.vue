<template>
  <navbar
    position="fixed"
    type="primary"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        ADMINISTRADOR
      </router-link>
    </template>
    <template slot="navbar-menu">
      <router-link
        to="/administrador"
        tag="a"
        style="margin-right: 30px;"
        class="nav-link"
      >
        <li class="nav-item">
            <p>Dashboard</p>
        </li>
      </router-link>
      <router-link
        to="/administrador/noticias"
        tag="a"
        class="nav-link"
      >
        <li class="nav-item">
            <p>Administrar Noticias</p>
        </li>
      </router-link>
    </template>
  </navbar>
</template>

<script>
import { Navbar } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    Navbar,
    [Popover.name]: Popover
  }
};
</script>

<style>
</style>
