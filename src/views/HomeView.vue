<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isWelcomeRoute = computed(() => route.path === '/');

</script>

<template>
  <div class="container-fluid pt-2 ">
    <ul class="nav nav-tabs justify-content-end ">
      <li class="nav-item ">
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
    <section v-if="isWelcomeRoute" class="welcome mt-4 text-center">
      <h1 class="display-5 fw-bold">Welcome to my Portfolio</h1>
      <p class="lead mb-0">
        Explora las secciones About, Portfolio y Contact para conocer mi perfil profesional y mis proyectos.
      </p>
    </section>
    <div v-else class="tab-content mt-3 ">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.nav-link.active {
  color: #0595a8;
}

.welcome {
  min-height: 40vh;
  display: grid;
  place-content: center;
  gap: 0.5rem;
}
</style>
