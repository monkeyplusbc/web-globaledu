<script lang="ts" setup>
const { cms, projects } = useContext();
const { banner } = cms.$page;
</script>

<template>
  <organisms-banner1 :data="banner" />
  <organisms-projects :data="projects" />
</template>