<template>
  <div class="page-header clear-filter" filter-color="orange">
    <div
      class="page-header-image"
      style="background-image: url('img/login.jpg')"
    ></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <card type="login" plain>
            <div slot="header" class="logo-container">
              <img v-lazy="'img/now-logo.png'" alt=""/>
            </div>

            <el-input placeholder="Nombre de Usuario" v-model="loginForm.username"></el-input>

            <el-input placeholder="Contraseña" v-model="loginForm.password" show-password style="margin-top:20px;"></el-input>

            <template slot="raw-content">
              <div class="card-footer text-center">
                <a
                  @click="login()"
                  class="btn btn-primary btn-round btn-lg btn-block"
                  >Iniciar Sesion</a
                >
              </div>
              <!-- <div class="pull-left">
                <h6>
                  <a href="#pablo" class="link footer-link">Create Account</a>
                </h6>
              </div>
              <div class="pull-right">
                <h6>
                  <a href="#pablo" class="link footer-link">Need Help?</a>
                </h6>
              </div> -->
            </template>
          </card>
        </div>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from '@/components';
import {login} from '../axios/metodos'
import MainFooter from '@/layout/MainFooter';
export default {
  name: 'login-page',
  bodyClass: 'login-page',
  components: {
    Card,
    MainFooter,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data(){
    return{
      loginForm:{
        username:"",
        password:""
      }
    }
  },
  methods:{
    async login(){
      await login(this.loginForm.username, this.loginForm.password).then(res => {
        localStorage.token = res.token;
        window.location.href = '/administrador/';

      })
    }
  }
};
</script>
<style></style>
