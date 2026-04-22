<script setup>
defineProps({
  image: String,
  title: String,
  description: String,
  link: String
})
</script>

<template>
  <div class="card mb-3">
    <img v-if="image" :src="image" class="card-img-top pt-3" height="250" :alt="title" />
    <div v-else class="card-img-top d-flex align-items-center justify-content-center bg-light text-muted" style="height: 250px;">
      Imagen no disponible
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
      <a :href="link" target="_blank" rel="noopener noreferrer" class="btn btn-outline-info">Más</a>
    </div>
  </div>
</template>

<style scoped></style>