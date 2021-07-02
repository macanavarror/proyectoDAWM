<template>
  <div>``
    <div id="team" class="section section-team text-center">
      <div class="container">
        <div class="team" style="min-height: 80vh;">
          <div class="row" style="margin-bottom: 30px;">
            <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/administrador' }">Administrador</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/administrador/noticias' }">Administrar Noticias</el-breadcrumb-item>
            <el-breadcrumb-item>Editar Noticia</el-breadcrumb-item>
          </el-breadcrumb>
          </div>
          <div class="row" style="margin-bottom: 25px">
            <label>Título de la Noticia:</label>
            <el-input placeholder="Ingrese el título de la noticia" v-model="noticia.titulo"></el-input>
          </div>
          <div class="row" style="margin-bottom: 25px">
            <label>Contenido de la Noticia:</label>
            <el-input
              type="textarea"
              rows="10"
              placeholder="Ingrese el contenido de la noticia..."
              v-model="noticia.contenido"
              maxlength="2000"
              show-word-limit>
            </el-input>
          </div>
          <div class="row" style="margin-bottom: 25px">
            <label>Imagen de la Noticia:</label>
            <el-input placeholder="Ingrese la URL de la imagen" v-model="noticia.imagen"></el-input>
          </div>
          <div class="row">
              <div style="width: fit-content; margin: auto;"><el-button style="background-color: rgb(249, 99, 50); border-color: rgb(249, 99, 50);" type="primary" @click="publicarNoticia()" round><i class="fas fa-save" style="margin-right: 5px;"></i> Publicar Noticia</el-button></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, Card, Tabs, TabPane, FormGroupInput, } from '@/components';
import { publicarNoticia, obtenerNoticia } from '../../axios/metodos'
export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
      noticia:{
        id:0,
        titulo:'',
        contenido:'',
        imagen:''
      }
    };
  },
  async mounted(){
    var noticia_id = this.$route.params.id 
    if(noticia_id){
      await obtenerNoticia(noticia_id).then(res => {this.noticia=res})
    }
  },
  methods:{
    async publicarNoticia(){
      await publicarNoticia(this.noticia).then(res => {
        window.location.href = '/administrador/noticias';
      })
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
