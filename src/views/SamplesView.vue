<script setup>
import projects from '../data/projects.json'
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-9">
        <RouterView />
      </div>
      <div class="col-3 mt-4">
        <ul class="list-group list-group-flush">
          <li v-for="project in projects" :key="project.id" class="list-group-item d-flex justify-content-end ">
            <RouterLink :to="`/samples/${project.id}`">{{ project.title }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>