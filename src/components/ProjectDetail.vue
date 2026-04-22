<script setup>
import projects from '../data/projects.js'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import ProjectCard from './ProjectCard.vue';

const route = useRoute()
const project = computed(() => projects.find(p => p.id === route.params.id))
</script>

<template>
  <ProjectCard v-if="project" :image="project.image" :title="project.title" :description="project.description"
    :link="project.link" />
</template>

<style scoped></style>