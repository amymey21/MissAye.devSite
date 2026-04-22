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
    <img :src="image" class="card-img-top pt-3" height="250" :alt="title" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
      <a :href="link" target="_blank" rel="noopener noreferrer" class="btn btn-outline-info">Más</a>
    </div>
  </div>
</template>

<style scoped></style>