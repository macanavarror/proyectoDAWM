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
          <h1 class="title">Equipo</h1>
          <div class="text-center">
            <p  style="font-weight: 500;">Conoce a nuestro equipo de desarrollo</p>
          </div>
        </div>
      </div>
    </div>
    <div id="team" class="section section-team text-center">
      <div class="container">
        <div class="team">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto mb-5 text-center">
              <h5 class="description">
                Presentamos al equipo de desarrollo de la página web de la Fundación Patitas Amor, el equipo Akatsuki. Algunas veces debes salir herido en DAWM para saber, caer para crecer, perder para luego ganar. Porque las lecciones más grandes de la vida se aprenden a través del dolor.  
              </h5>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-3">
              <div class="team-player">
                <img
                  src="img/kevin.jpg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Kevin Cevallos</h4>
                <p class="category text-primary">Desarrollador Frontend</p>
                <p class="description">
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#">links</a> for people to be able to follow
                  them outside the site.
                </p>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-linkedin"></i
                ></a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="team-player">
                <img
                  src="img/camila.jpg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Camila Navarro</h4>
                <p class="category text-primary">Desarrollador Backend</p>
                <p class="description">
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#">links</a> for people to be able to follow
                  them outside the site.
                </p>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-linkedin"></i
                ></a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="team-player">
                <img
                  src="img/adriana.jpg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Adriana Jenner</h4>
                <p class="category text-primary">Desarrollador Frontend</p>
                <p class="description">
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#">links</a> for people to be able to follow
                  them outside the site.
                </p>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-google-plus"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-youtube"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-twitter"></i
                ></a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="team-player">
                <img
                  src="img/joffre.jpg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Joffre Ramirez</h4>
                <p class="category text-primary">Desarrollador Backend</p>
                <p class="description">
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#">links</a> for people to be able to follow
                  them outside the site.
                </p>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-instagram"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-facebook-square"></i
                ></a>
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
export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      }
    };
  }
};
</script>
<style>
.rounded-circle.img-fluid.img-raised:hover {-webkit-transform: rotate(360deg);transform: rotate(360deg);transition:all .5s ease-in-out;}
</style>
