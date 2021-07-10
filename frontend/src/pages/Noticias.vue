<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg6.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">Noticias</h1>
          <div class="text-center">
            <p style="font-weight: 500;">Conoce lo mas destacado en nuestra comunidad</p>
          </div>
        </div>
      </div>
    </div>
    <div id="team" class="section section-team text-center">
      <div class="container">
        <div class="team">
          <div class="row">
            <div class="col-sm-12 col-lg-12" style="display: flex; padding-left: 0px; margin-bottom: 10px; margin-left: 15px;">
              <label style="padding-top: 8px; margin-right: 10px; margin-left: 0px;">Buscar: </label>
              <fg-input placeholder="Búsqueda por título o contenido..." v-model="busqueda"></fg-input>
              <n-button @click="buscarNoticias()" type="primary" style="margin: 0px 10px;" round icon>
                <font-awesome-icon icon="search"></font-awesome-icon>
              </n-button>
            </div>
          </div>
          <div class="row">
            <div style="margin: 15px;" class="card" v-for="noticia in noticias" :key="noticia.id">
              <div style="width: 100%; height: fit-content; background-color: #f96332; padding: 15px 25px;">
                <h3 style="color: white; font-weight: 600; text-align: left; margin: 0px;">{{noticia.titulo}}</h3>
              </div>
              <div class="row" style="margin: 0px;">
                <div class="col-lg-4 news-image-container">
                  <div class="news-image" :style="{ 'background-image': 'url(' + noticia.imagen + ')' }"></div>
                </div>
                <p class="col-lg-8" style="text-align: justify; padding: 25px;">
                  {{noticia.contenido}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, Card, Tabs, TabPane, FormGroupInput, } from '@/components';
import {obtenerNoticias, buscarNoticias} from '../axios/metodos'
export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      },
      busqueda: '',
      noticias:[]
    };
  },
  async mounted(){
    await obtenerNoticias().then(res => this.noticias = res)
  },
  methods:{
    async buscarNoticias(){
      await buscarNoticias(this.busqueda).then(res => this.noticias = res)
    }
  }
};
</script>
<style>
.news-image-container{
  padding: 25px 0px 25px 25px !important;
}

.news-image{
  width: 100%; 
  height: 400px;
  background-size: cover;
  background-position: center;
}
</style>
