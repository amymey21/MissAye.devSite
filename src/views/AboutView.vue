<script setup>
import profileImage from '@/assets/img/IMG_20250306_230056615.jpg';
</script>
<template>
  <div class="container">
    <img :src="profileImage" alt="Foto de Ayelén" class="img-fluid rounded-circle d-flex mx-auto mt-3"
      style="width: 150px; height: 150px; object-fit: cover;">
    <h1 class="rouge-script-regular d-flex">Ayelén Silva</h1>

    <div class="row">
      <div class="col-8 justify-text border-end border-1 mb-3">
        <p class="">Soy una desarrolladora FrontEnd apasionada por crear experiencias web atractivas y funcionales. Con
          habilidades en HTML, CSS, JavaScript y frameworks como Vue.js, me esfuerzo por construir interfaces de usuario
          intuitivas y responsivas. Mi objetivo es seguir aprendiendo y creciendo en el campo del desarrollo web para
          contribuir proyectos innovadores y desafiantes.</p>
      </div>
      <div class="col-4">
        <h2>Tecnologías</h2>
        <ul>
          <li class="badge rounded-pill text-bg-info">HTML5</li><br>
          <li class="badge rounded-pill text-bg-info">CSS3</li><br>
          <li class="badge rounded-pill text-bg-info">JavaScript (ES6+)</li><br>
          <li class="badge rounded-pill text-bg-info">Vue.js</li><br>
          <li class="badge rounded-pill text-bg-info">Bootstrap</li><br>
          <li class="badge rounded-pill text-bg-info">Git</li><br>
        </ul>
      </div>


    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rouge+Script&display=swap');

h1 {
  text-align: center;
  margin-top: 20px;
}

.rouge-script-regular {
  font-family: "Rouge Script", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 5rem;
  color: #0595a8;
}
</style>
