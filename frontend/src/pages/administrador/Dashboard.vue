<template>
  <div style="min-height: 93vh;">
    <div id="team" class="section section-team text-center">
      <div class="container">
        <div class="team">
          <div class="row" style="margin-bottom: 30px;">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/administrador' }">Administrador</el-breadcrumb-item>
              <el-breadcrumb-item>Dashboard</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-6 col-sm-12" style="height: 370px;">
            <div class="card" style="height: 370px;">
              <h3>Relación entre Mensajes y Noticias</h3>
              <vc-donut
                background="white" foreground="grey"
                :size="250" unit="px" :thickness="30"
                has-legend legend-placement="bottom"
                :sections="sections" :total="100"
                :start-angle="0" :auto-adjust-text-size="true"
                @section-click="handleSectionClick">
                <p>Contenido del sitio</p>
              </vc-donut>
            </div>
          </div>
          <div class="col-lg-6 col-sm-12" style="height: 370px;">
            <div class="card" style="height: 370px;">
              <h3>Cantidad de Mensajes y Noticias</h3>
              <div style="width: fit-content; margin: auto;">
                <vue-bar-graph
                  :points="points"
                  :show-y-axis="false"
                  :show-x-axis="true"
                  :height="300"
                  :show-values="true"
                />
              </div>
            </div>
          </div>
          <div class="col-12 mt-5">
            <h3>Ultimos Mensajes Recibidos</h3>
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
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
import {obtenerMensajes, obtenerNoticias} from '../../axios/metodos'
import VueBarGraph from 'vue-bar-graph';

export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    VueBarGraph,
  },
  data() {
    return {
      mensajes: [],
      noticias: [],
      form: {
        firstName: '',
        email: '',
        message: ''
      },
      sections: [
        { label: 'Noticias', value: 35, color: 'orange' },
        { label: 'Mensajes', value: 65, color: 'green' },
      ],
      points: [{label: 'Mensajes', value: 21}, {label: 'Noticias', value: 10}]
    };
  },
  async mounted(){
    await obtenerMensajes().then(res => this.mensajes = res);
    await obtenerNoticias().then(res => this.noticias = res);
    this.points = [{label: 'Mensajes', value: this.mensajes.length}, {label: 'Noticias', value: this.noticias.length}];
    this.sections = [
      { label: 'Noticias', value: (this.noticias.length/this.noticias.length + this.mensajes.length)*100, color: 'orange' },
      { label: 'Mensajes', value: (this.mensajes.length/this.noticias.length + this.mensajes.length)*100, color: 'green' },
    ];
  },
  methods:{
    handleSectionClick(section, event) {
      console.log(`${section.label} clicked.`);
    }
  },
};
</script>
<style scoped>
p{
    margin-bottom: 0px !important;;
}

.subtitle{
    font-weight: bold; 
    width: 100px; 
    text-align: left;
}
</style>
