<script lang="ts" setup>
  const { cms, data, sugeridos } = useContext();
</script>

<template>
  <organisms-info-blog :data="data" :sugeridos="sugeridos" />
</template>