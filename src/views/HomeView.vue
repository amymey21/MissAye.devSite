<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

</script>

<template>
  <div class="container pt-2">
    <ul class="nav nav-tabs justify-content-end">
      <li class="nav-item">
        <RouterLink to="/about" class="nav-link" :class="{ active: route.path === '/about' }">About</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/samples" class="nav-link" :class="{ active: route.path.startsWith('/samples') }">Portfolio
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/contact" class="nav-link" :class="{ active: route.path === '/contact' }">Contact</RouterLink>
      </li>
    </ul>

    <div class="tab-content mt-3">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.nav-link.active {
  color: #0595a8;
}
</style>
