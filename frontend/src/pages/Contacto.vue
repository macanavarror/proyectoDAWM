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
          <h1 class="title">Contacto</h1>
          <!-- <a href="#about" class="btn btn-primary btn-round btn-lg btn-block" style="width: fit-content; margin: auto;">Conoce Mas</a> -->
        </div>
      </div>
    </div>
    <div id="about" class="section section-about-us">
      <div class="container" style="width: 100%;">
        <div class="row mb-4">
          <div class="w-50 pr-2">
            <label>Nombre:</label>
            <el-input placeholder="Nombre" v-model="formulario.nombre"></el-input>
          </div>
          <div class="w-50 pl-2">
            <label>Apellido:</label>
            <el-input placeholder="Apellido" v-model="formulario.apellido"></el-input>
          </div>
        </div>
        <div class="row mb-4">
          <div class="w-50 pr-2">
            <label>Pais:</label><br>
            <el-select v-model="formulario.pais" placeholder="Pais" class="w-100">
              <el-option
                v-for="item in pais.options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="w-50 pl-2">
            <label>Correo Electrónico:</label><br>
            <el-input placeholder="Correo Electrónico" v-model="formulario.correo"></el-input>
          </div>
        </div>
        <div class="row" style="margin-bottom: 25px">
          <div class="w-100 pr-2">
            <label>Detalle:</label><br>
            <el-input
              type="textarea"
              resize="none"
              rows="10"
              placeholder="Ingrese su detalle aquí"
              v-model="formulario.detalle">
            </el-input>
          </div>
        </div>
        <div class="row">
          <iframe style="width: 100%; height: 400px; margin-bottom: 20px;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185641.77413212796!2d-78.34761489631097!3d-0.5014662150479273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5bbde401093b7%3A0x421794a2ebbf7dd5!2sFundaci%C3%B3n%20Lucky%20Bienestar%20Animal!5e0!3m2!1ses!2sec!4v1625938734034!5m2!1ses!2sec"  loading="lazy"></iframe>
        </div>
        <div class="row">
          <a @click="enviar()" class="btn btn-primary btn-round btn-lg btn-block" style="width: fit-content; margin: auto;">Enviar</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
import { enviarContacto } from '../axios/metodos'

export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      pais:{
        options: [{
          value: 'Ecuador',
          label: 'Ecuador'
        }, {
          value: 'Peru',
          label: 'Peru'
        }, {
          value: 'Colombia',
          label: 'Colombia'
        }, {
          value: 'Chile',
          label: 'Chile'
        }, {
          value: 'Bolivia',
          label: 'Bolivia'
        }, {
          value: 'Venezuela',
          label: 'Venezuela'
        }, {
          value: 'Brasil',
          label: 'Brasil'
        }, {
          value: 'Uruguay',
          label: 'Uruguay'
        }, {
          value: 'Paraguay',
          label: 'Paraguay'
        }, {
          value: 'Argentina',
          label: 'Argentina'
        }],
        value: ''
      },
      formulario: {
        nombre: '',
        apellido: '',
        pais: '',
        correo: '',
        detalle: ''
      }
    };
  },
  methods:{
    async enviar(){
      await enviarContacto(this.loginForm.username, this.loginForm.password).then(res => {
        localStorage.token = res.token;
        window.location.href = '/';

      })
    }
  }
};
</script>
<style></style>
