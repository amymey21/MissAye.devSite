<script setup>
import ProjectDetail from './ProjectDetail.vue';

defineProps({
  image: String,
  title: String,
  description: String,
  link: String
})
</script>

<template>
  <div class="card mb-3">
    <img v-if="image" :src="image" class="card-img-top pt-3" :alt="title" />
    <div v-else class="card-img-top d-flex align-items-center justify-content-center bg-light text-muted"
      style="height: 250px;">
      Imagen no disponible
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
      <RouterLink :to="ProjectDetail.id" class="btn btn-outline-info me-3">
        Detalles</RouterLink>
      <a :href="link" target="_blank" rel="noopener noreferrer" class="btn btn-outline-info">Ver Demo</a>
    </div>
  </div>
</template>

<style scoped>
img {
  height: 350px;
  object-fit: contain;
}
</style>