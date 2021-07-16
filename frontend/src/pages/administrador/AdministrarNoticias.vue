<template>
  <div>
    <div id="team" class="section section-team text-center">
      <div class="container">
        <div class="team">
          <div class="row" style="margin-bottom: 30px;">
            <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/administrador' }">Administrador</el-breadcrumb-item>
            <el-breadcrumb-item>Administrar Noticias</el-breadcrumb-item>
          </el-breadcrumb>
          </div>
          <div class="row">
            <div class="card" v-for="noticia in noticias" :key="noticia.id">
              <div class="bg-primary" style="width: 100%; height: fit-content; padding: 15px 25px; display: flex;">
                <h3 style="color: white; font-weight: 600; text-align: left; margin: 0px; width: inherit;">{{noticia.titulo}}</h3>
                <div style="display: flex;" class="controls-container">
                  <i style="cursor: pointer;" class="fas fa-edit" @click="editarNoticia(noticia.id)"></i>
                  <i style="cursor: pointer;" class="fas fa-trash-alt" @click="eliminarNoticia(noticia.id)"></i>
                </div>
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
          <div class="row">
            <router-link
              to="/administrador/noticias/editar"
              tag="a"
              style="margin: auto;"
              class="nav-link"
            >
              <el-button class="bg-primary" style="border-color: white;margin: auto;" type="primary" round><i class="fas fa-plus" style="margin-right: 5px;"></i> Nueva Noticia</el-button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, Card, Tabs, TabPane, FormGroupInput, } from '@/components';
import {obtenerNoticias, buscarNoticias, eliminarNoticia} from '../../axios/metodos'
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
      console.log('sdfasdfsf sd')
      await buscarNoticias(this.busqueda).then(res => this.noticias = res)
    },
    editarNoticia(id){
      this.$router.push('/administrador/noticias/editar/'+String(id))
    },
    async eliminarNoticia(id){
      await eliminarNoticia(id).then(res => this.noticias = res)
    },
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

.controls-container i{
  font-size: 1.825em;
  color: white;
  padding: 3px 5px 0px 5px;
}

.controls-container{
  width: 75px;
}
</style>
