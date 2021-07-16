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
                  Estudiante de ingeniería en Computación de la Escuela Superior Politécnica del Litoral. 
                  Nacido en Jipijapa, Ecuador. He trabajado 
                  en diferentes proyectos de desarrollo de aplicaciones en los lenguajes Python, Java y JavaScript. 
                </p>
                <a href="https://twitter.com/KevinCevallos95" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a href="https://www.linkedin.com/in/kevincevallospilay/" class="btn btn-primary btn-icon btn-round"
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
                  Estudiante de la carrera de Ingeniería en Computación en la Escuela Superior Politécnica del Litoral. 
                  Nacida el 7 de agosto de 1997 en la ciudad de Guayaquil, Ecuador. Correo de contacto: macanava@espol.edu.ec.
                  Aspirando a desarrollar habilidades y adquirir conocimientos de todas las ramas de la computación. Esperando enfrentar desafíos que forjen mi experiencia
                   e incrementen mi valor profesional. Tengo conocimiento en Python, Java, PHP, MongoDB. 
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
                <h4 class="title">Adriana Guilindro</h4>
                <p class="category text-primary">Desarrollador Frontend</p>
                <p class="description">
                  Estudiante de Ciencias Computacionales en la Escuela Superior Politécnica del Litoral,
                  de nacionalidad guayaquileña y con 21 años. No tengo experiencia en el ámbito laboral
                  pero he participado en actividades relacionada con programación,
                  siendo el Pyweekend de 2019 uno de los eventos más importantes.
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
                  Estudiante universitario de la Escuela Superior Politécnica del litoral, siguiendo la carrera de ingeniería de software. Guayaquileño con 21 años de edad. No tengo mucha experiencia laboral, pero si he participado en proyectos con Java, Python y Javascript.
                   Anhelo ser un buen programador y poder aplicar mis habilidades en un ámbito empresarial. 
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
