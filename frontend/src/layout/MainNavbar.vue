<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        DAW
      </router-link>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <router-link
          to="/"
          tag="a"
          style="margin-right: 30px;"
          class="nav-link"
          v-intro="'Informacion general del sitio'"
        >
          <p>Inicio</p>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          to="/equipo"
          tag="a"
          style="margin-right: 30px;"
          class="nav-link"
          v-intro="'Conoce mas sobre nuestro equipo de trabajo'"
        >
          <p>Equipo</p>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          to="/noticias"
          tag="a"
          style="margin-right: 30px;"
          class="nav-link"
          v-intro="'Enterate de las ultimas noticias'"
        >
          <p>Noticias</p>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          to="/contacto"
          tag="a"
          style="margin-right: 30px;"
          class="nav-link"
          v-intro="'Contactate para mas informacion'"
        >
          <p>Contacto</p>
        </router-link>
      </li>

      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Twitter"
          data-placement="bottom"
          href="https://twitter.com/CreativeTim"
          target="_blank"
        >
          <i class="fab fa-twitter"></i>
          <p class="d-lg-none d-xl-none">Twitter</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Like us on Facebook"
          data-placement="bottom"
          href="https://www.facebook.com/CreativeTim"
          target="_blank"
        >
          <i class="fab fa-facebook-square"></i>
          <p class="d-lg-none d-xl-none">Facebook</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Instagram"
          data-placement="bottom"
          href="https://www.instagram.com/CreativeTimOfficial"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
          <p class="d-lg-none d-xl-none">Instagram</p>
        </a>
      </li>
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

<style scoped></style>
