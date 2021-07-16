<template>
  <div style="min-height: 93vh;">
    <div id="team" class="section section-team text-center">
      <div class="container">
        <div class="team">
          <div class="row" style="margin-bottom: 30px;">
            <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/administrador' }">Administrador</el-breadcrumb-item>
            <el-breadcrumb-item>Buzón de Entrada</el-breadcrumb-item>
          </el-breadcrumb>
          </div>
          <div class="row">
            <div class="card p-4" style="border-left: 10px solid #1266f1;" v-for="mensaje in mensajes" :key="mensaje.id">
                <div style="width: 100%; display: flex;"><p class="mr-3 subtitle">Nombre:</p><p>{{mensaje.nombre}}</p></div>
                <div style="width: 100%; display: flex;"><p class="mr-3 subtitle">Apellido:</p><p>{{mensaje.apellido}}</p></div>
                <div style="width: 100%; display: flex;"><p class="mr-3 subtitle">Pais:</p><p>{{mensaje.pais}}</p></div>
                <div style="width: 100%; display: flex;"><p class="mr-3 subtitle">Correo:</p><p>{{mensaje.correo}}</p></div>
                <div style="width: 100%; display: block; text-align: left; margin-top: 20px;"><p>{{mensaje.detalle}}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, Card, Tabs, TabPane, FormGroupInput, } from '@/components';
import {obtenerMensajes} from '../../axios/metodos'
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
      mensajes:[]
    };
  },
  async mounted(){
    await obtenerMensajes().then(res => this.mensajes = res)
  },
  methods:{
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

<style lang="scss" scoped>
p{
    margin-bottom: 0px !important;;
}

.subtitle{
    font-weight: bold; 
    width: 100px; 
    text-align: left;
}
</style>
