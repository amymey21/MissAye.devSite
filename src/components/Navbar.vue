<script setup>
import logoImage from '@/assets/img/ADevLogo.svg';
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg" data-bs-theme="dark">
      <div class="container-fluid m-0">
        <RouterLink class="navbar-brand" to="/">
          <img :src="logoImage" alt="Logo" height="60" />
        </RouterLink>
      </div>
    </nav>
  </div>
</template>

<style scoped>
nav {
  background-color: #100a31;
}
</style>