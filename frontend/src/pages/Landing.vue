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
          <h1 class="title">Fundación Patitas Amor</h1>
          <a href="#about" class="btn btn-primary btn-round btn-lg btn-block" style="width: fit-content; margin: auto;">Conoce Mas</a>
        </div>
      </div>
    </div>
    <div id="about" class="section section-about-us">
      <div class="container">
        
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">¿Quienes Somos?</h2>
            <h5 class="description">
              La Fundación Patitas Amor, es una fundación que ayuda a los animales 
              que estén en la calle o hayan sido abandonados, para darles protección y 
              cuidados hasta que llegue una familia. Fue fundada en Guayaquil, en junio 
              de 2021. Estamos ubicados en un albergue vía a Durán, puedes participar 
              como voluntario y pasar un tiempo con los animales o donar para que ellos 
              tengan los mejores cuidados. 
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="background-image: url('img/login.jpg')"
              >
                <!-- First image on the left side -->
                <p class="blockquote blockquote-primary">
                  "Los animales son sensibles, inteligentes, divertidos y entretenidos. Debemos cuidarlos al igual que hacemos con los niños", Michael Morpurgo. "
                </p>
              </div>
              <!-- Second image on the left side of the article -->
              <div
                class="image-container"
                style="background-image: url('img/bg3.jpg')"
              ></div>
            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div
                class="image-container image-right"
                style="background-image: url('img/fundacionImagen-02.png')"
              ></div>
              <h3>
                Proteger y cuida a los animales
              </h3>
              <p>
                Actualmente esta fundación surgió antes la necesidad de tener un lugar y personas
                que cuiden y velen por el bienestar de nuestros amigos peludos en Guayaquil. 
              </p>
              <p>
                Nuestra instalación cuenta con un límite de capacidad para albergar a los animales,
                ya que estos son abandonados constantemente y su población crece y crece porque no hay un
                control de reproducción.
              </p>
              <p>
                Nuestro objetivo es proteger a esos amigos abandonados, cuidarlos hasta que una familia le de el cariño
                que se merecen, mientras se espera hay voluntarios que ayudan en el cuidados de nuestros amigos peludos.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column is-8 is-offset-2">
                        <div style="width: 100%;">
                        <h2 class="title" style="width: fit-content; margin: auto; margin-bottom: 25px;">¿Necesitas ayuda?</h2>
                        </div>
                        <horizontal-stepper 
                          :steps="demoSteps"
                          :canContinue="canContinue"
                        >                     
                        </horizontal-stepper>
                    </div>
                </div>
            </div>
        </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';

import HorizontalStepper from 'vue-stepper';

// This components will have the content for each stepper step.
import StepOne from './steps/StepOne.vue';
import StepTwo from './steps/StepTwo.vue';
import StepThree from './steps/StepThree.vue';

export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    HorizontalStepper
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      },
      canContinue: true,
      demoSteps: [
          {
              icon: 'mail',
              name: 'first',
              title: 'Primer Paso',
              subtitle: 'Contacto',
              component: StepOne,

          },
          {
              icon: 'report_problem',
              name: 'second',
              title: 'Segundo Paso',
              subtitle: 'Formulario',
              component: StepTwo,
          },
          {
              icon: 'report_problem',
              name: 'third',
              title: 'Tercer Paso',
              subtitle: 'Espera',
              component: StepThree,
          }
      ]
    };
  },
  mounted(){
    this.$intro().start(); // start the guide
    // this.$intro().showHints(); // show hints
  },

  methods: {
    // Executed when @stepper-finished event is triggered
    alert(payload) {
        alert('end')
    }
  }
};

</script>
<style>
.blockquote.blockquote-primary {
    border-color: #1266f1 !important;
    color: #1266f1 !important;
}
</style>
